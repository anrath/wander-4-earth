from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime
import requests

def index(request):
   today = datetime.now().date()
   return render(request, "myfeed/index.html", {"today": today})

def login(request):
   email = request.POST['email']
   pwd = request.POST['password']
   URL = "http://localhost:3000/api/user/login/"
   data = {"email":email, "password": pwd}
   val = requests.post(url=URL, data=data)
   # print(val)
   if(True):

      return dashboard(request)
   else:
      return index(request)

def dashboard(request):
   return render(request, "myfeed/index.html", {"today": "BIG SUCCESS"})