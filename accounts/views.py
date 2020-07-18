from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.http import JsonResponse
from .serializers import UserSerializer,UserRegisterSerializer
from django.contrib.auth import authenticate,login,logout


def message(msg):
  return {"message":msg}


class RegisterAPIView(APIView):
  serializer_class = UserRegisterSerializer
  def post(self,request):
    first_name = request.data['first_name']
    last_name = request.data['last_name']
    email = request.data['email']
    password = request.data['password']
    try:
      user = User.objects.get(email=email)
      return Response(message("User already exists"),status=status.HTTP_409_CONFLICT)
    except:
      user = User.objects.create_user(first_name= first_name,last_name=last_name,username=email,email=email,password=password)
      user.save()
      serializer = UserSerializer(user)
      return Response(serializer.data,status=status.HTTP_201_CREATED)

class LoginAPIView(APIView):
  def post(self,request):
    username = request.data["email"]
    password = request.data["password"]
    try:
      User.objects.get(username=username)
      user = authenticate(username=username,password=password)
      if user:
        token,created = Token.objects.get_or_create(user=user)
        if not created:
          token.delete()
          token = Token.objects.create(user=user)
        data = {
          "token":token.key
        }
        user_data = UserSerializer(user).data
        data["user"] = user_data
        return Response(data,status=status.HTTP_200_OK)
      else:
        return Response(message("Invalid cridentials"),status=status.HTTP_401_UNAUTHORIZED)
    except:
      return Response(message("User does not exists"),status=status.HTTP_404_NOT_FOUND)

