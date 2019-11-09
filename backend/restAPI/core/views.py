from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse
import requests

def queries(request):

    launches    = {}
    next_launch = {}
    last_launch = {}
    data = []

    r = requests.get('https://api.spacexdata.com/v3/launches/next')
    launches["next_launch"] = r.json()
    next_launch["mission_name"] = launches["next_launch"]["mission_name"]
    next_launch["launch_year"] = launches["next_launch"]["launch_year"]
    data.append(next_launch)

    r = requests.get('https://api.spacexdata.com/v3/launches/latest')
    launches["last_launch"] = r.json()
    last_launch["mission_name"] = launches["last_launch"]["mission_name"]
    last_launch["launch_year"] = launches["last_launch"]["launch_year"]
    data.append(last_launch)


    return JsonResponse(data, safe = False)