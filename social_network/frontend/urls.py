from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('home', index),
    path('login', index),
    path('groups', index),
    path('registration', index)
]
