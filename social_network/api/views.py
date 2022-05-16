from django.shortcuts import render
from rest_framework import generics, status
from .models import Group
from .models import Group1, User
from .serializers import GroupSerializer
from .serializers import Group1Serializer, UserSerializer
from .serializers import CreateGroupSerializer, CreateUserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class GroupView(generics.CreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class Group1View(generics.CreateAPIView):
    queryset = Group1.objects.all()
    serializer_class = Group1Serializer

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CreateGroupView(APIView):
    serializer_class = CreateGroupSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            prof_pic = serializer.data.get('prof_pic')
            group_name = serializer.data.get('group_name')
            category1 = serializer.data.get('category1')
            category2 = serializer.data.get('category2')
            category3 = serializer.data.get('category3')
            group_admin = self.request.session.session_key
            group = Group1(prof_pic=prof_pic, group_name=group_name, group_admin=group_admin, category1=category1, category2=category2, category3=category3)
            group.save()
            return Response(Group1Serializer(group).data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors)

class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            usr_name = serializer.data.get('usr_name')
            usr_surname = serializer.data.get('usr_surname')
            email = serializer.data.get('email')
            phone_num = serializer.data.get('phone_num')
            gender = serializer.data.get('gender')
            password = serializer.data.get('password')
            user = User(usr_name=usr_name, usr_surname=usr_surname, email=email, phone_num=phone_num, gender=gender, password=password)
            user.save()
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors)