from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse
import requests

def queries(request):

    launches          = {}
    next_launch       = {}
    latest_launch     = {}
    data_objects      = []

    r = requests.get('https://api.spacexdata.com/v3/launches/next')
    launches["next_launch"] = r.json()
    next_launch["mission_name"] = launches["next_launch"]["mission_name"]
    next_launch["launch_date"] = launches["next_launch"]["launch_date_utc"][:-14]
    data_objects.append(next_launch)

    r = requests.get('https://api.spacexdata.com/v3/launches/latest')
    launches["latest_launch"] = r.json()
    latest_launch["mission_name"] = launches["latest_launch"]["mission_name"]
    latest_launch["launch_date"] = launches["latest_launch"]["launch_date_utc"][:-14]
    data_objects.append(latest_launch)

    return JsonResponse(data_objects, safe = False)


def queries_list(request):
    
    launches          = {}
    upcoming_launches = []
    past_launches     = []
    data_list         = []

    r = requests.get('https://api.spacexdata.com/v3/launches/upcoming')
    launches["upcoming_launches"] = r.json()
    for launch in launches["upcoming_launches"][:5]:
      upcoming_launches.append({
        "mission_name": launch["mission_name"],
        "launch_date": launch["launch_date_utc"][:-14]
        })
    data_list.append(upcoming_launches)

    r = requests.get('https://api.spacexdata.com/v3/launches/past')
    launches["past_launches"] = r.json()
    for launch in launches["past_launches"][-5:]:
      past_launches.append({
        "mission_name": launch["mission_name"],
        "launch_date": launch["launch_date_utc"][:-14]
        })
    data_list.append(past_launches)

    return JsonResponse(data_list, safe = False)