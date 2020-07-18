
from django.contrib import admin
from django.urls import path,re_path,include
from .views import index
from accounts import urls as account_urls

urlpatterns = [
  path('',index,name="index"),
  path('admin/', admin.site.urls),
  path('api/accounts/',include(account_urls,namespace="accounts")),
  re_path(r'^.*$', index, name="index"),
]
