
from django.contrib import admin
from django.urls import path,re_path
from .views import index

urlpatterns = [
  path('',index,name="index"),
  path('admin/', admin.site.urls),
  re_path(r'^.*$', index, name="index"),
]
