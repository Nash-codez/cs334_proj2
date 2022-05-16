from django.db import models
import string
import random


# Generates a random unique code for the group 
def gen_unique_code():
    length = 15

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Group.objects.filter(code=code).count() == 0:
            break

    return code

# Create your models here.
class Group(models.Model):
    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=60, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

# Actual group model.
class Group1(models.Model):
    prof_pic = models.ImageField(null=True, blank=True)
    group_name = models.CharField(max_length=20, default=gen_unique_code(), unique=True)
    group_admin = models.CharField(max_length=60,unique=False)
    category1 = models.CharField(max_length=25, unique=False)
    category2 = models.CharField(max_length=25, unique=False)
    category3 = models.CharField(max_length=25, unique=False)

# User model.
class User(models.Model):
    usr_name = models.CharField(max_length=20, unique=False)
    usr_surname = models.CharField(max_length=20, unique=False)
    email = models.EmailField(max_length=254, unique=True, null=False, default="")
    phone_num = models.IntegerField(null=True)
    gender = models.CharField(max_length=7, null=False, default="Other")
    password = models.CharField(max_length=60, null=False, default="")