from django.shortcuts import render
from django.conf import settings
import requests

def next_launch(request):
    r = requests.get('https://api.spacexdata.com/v3/launches/next' )
    launches = r.json()
    # books_list = {'books':books['results']}
    return render(request,'index.html',{
        'name': launches['mission_name'],
        'year': launches['launch_year'],
    })