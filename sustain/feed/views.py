from django.shortcuts import render
from django.http import HttpResponse
from .forms import LoginForm

# Create your views here.

def home(request):
    return render(request, 'feed/home.html')

def dashboard(request):
    return render(request, 'feed/index.html')

def about(request):
    return render(request, 'feed/about.html')

def login(request):
    """if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
    form = LoginForm()"""

    return render(request, 'feed/login.html')

def signup(request):
    return render(request, 'feed/signup.html')
