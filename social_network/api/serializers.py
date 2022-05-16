from rest_framework import serializers
from .models import Group
from .models import Group1
from .models import User

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')

class Group1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Group1
        fields = ('id', 'prof_pic', 'group_name', 'group_admin', 'category1', 'category2', 'category3')
        
class CreateGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group1
        fields = ('prof_pic', 'group_name', 'category1', 'category2', 'category3')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'usr_name', 'usr_surname', 'email', 'phone_num', 'gender', 'password')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('usr_name', 'usr_surname', 'email', 'phone_num', 'gender', 'password')
