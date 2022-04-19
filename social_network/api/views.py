from django.shortcuts import render
from rest_framework import generics
from .models import Group
from .serializers import GroupSerializer

# Create your views here.

class GroupView(generics.CreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
