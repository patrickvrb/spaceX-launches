from django.contrib import admin
from django.urls import path
from core.views import queries, queries_list

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', queries),
    path('list', queries_list)
]
