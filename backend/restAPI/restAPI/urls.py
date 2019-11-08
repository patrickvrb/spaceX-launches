from django.contrib import admin
from django.urls import path
from core.views import next_launch

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', next_launch),
]
