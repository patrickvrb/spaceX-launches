from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse
import requests

def queries(request):

    launches          = {}
    next_launch       = {}
    latest_launch     = {}
    upcoming_launches = {}
    lista             = []
    past_launches     = {}
    data              = []

    r = requests.get('https://api.spacexdata.com/v3/launches/next')
    launches["next_launch"] = r.json()
    next_launch["mission_name"] = launches["next_launch"]["mission_name"]
    next_launch["launch_year"] = launches["next_launch"]["launch_year"]
    data.append(next_launch)

    r = requests.get('https://api.spacexdata.com/v3/launches/latest')
    launches["latest_launch"] = r.json()
    latest_launch["mission_name"] = launches["latest_launch"]["mission_name"]
    latest_launch["launch_year"] = launches["latest_launch"]["launch_year"]
    data.append(latest_launch)

    r = requests.get('https://api.spacexdata.com/v3/launches/upcoming')
    launches["upcoming_launches"] = r.json()
    for launch in launches["upcoming_launches"]:
        upcoming_launches["mission_name"] = launch["mission_name"]
        upcoming_launches["launch_year"] = launch["launch_year"]
        lista.append(upcoming_launches)
    data.append(lista)


    return JsonResponse(data, safe = False)