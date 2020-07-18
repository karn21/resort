from django.urls import path
from . import views

app_name="accounts"

urlpatterns = [
    path("register/",views.RegisterAPIView.as_view(),name="register_api_view"),
    path("login/",views.LoginAPIView.as_view(),name="login_api_view"),
    path("user/",views.UserAPIView.as_view(),name="user_api_view"),
]
