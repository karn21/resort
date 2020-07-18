from django.urls import path
from . import views

app_name="accounts"

urlpatterns = [
    path("hello/",views.HelloView.as_view(),name="hello_view"),
]
