from django.urls import path
from . import views

app_name="accounts"

urlpatterns = [
    path("register/",views.RegisterAPIView.as_view(),name="register_api_view"),
    path("login/",views.LoginAPIView.as_view(),name="login_api_view"),
]
