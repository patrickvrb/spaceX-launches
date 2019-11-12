# SpaceX Information

Django API consuming SpaceX's public API and rendering using React.


## Instalation

After cloning the repo, make sure to:

* Create a virtual environment for the Django API: ```python3 -m venv venv```
* Entering on virtual environment: ```source venv/bin/activate```
* Installing packages: ```pip install requirements.txt```

Go to ```.../restAPI/``` and build the local Django server : ```python3 manage.py runserver```

Now the API will be available on your [localhost:8000]

For the React part, make sure to:

* Go to ```.../frontend/``` and exectute ```yarn start````

The default browser will open with the launches informations.
