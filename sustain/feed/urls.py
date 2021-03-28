from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name = 'feed-home'),
    path('dashboard/', views.dashboard, name = 'feed-dashboard'),
    path('login/', views.login, name = 'feed-login'),
    path('about/', views.about, name = 'feed-about'),
    path('signup/', views.signup, name ='feed-signup' )
]