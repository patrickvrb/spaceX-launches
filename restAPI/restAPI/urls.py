from django.contrib import admin
from django.urls import path
from core.views import queries

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', queries),
]
