"""
URL configuration for backend_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#"refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NzA3MDY0OSwiaWF0IjoxNjg2OTg0MjQ5LCJqdGkiOiJiMGNjZWJiNmM1MzY0OTIzYTJkYTcwZDljY2I1ODRkYiIsInVzZXJfaWQiOjN9.0xM5DRBnxwCwLp8TRi5o2TkWrjWLXp-6t4UpQUdk5Ls",
#"access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg2OTg0NTQ5LCJpYXQiOjE2ODY5ODQyNDksImp0aSI6ImMzMTE5ODQ2YmJlZTRhNjNiYWExOTM3MTQzMmQxNDZjIiwidXNlcl9pZCI6M30.N-3_2UAe24esjXOzJZb86qNHmUXzGbQuccqElaXOWWE"

from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('main.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/', include('rest_framework.urls'))



]
