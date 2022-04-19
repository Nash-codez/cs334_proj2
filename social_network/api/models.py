from django.db import models
import string
import random
import datetime

# Generates a random unique code for the group 
def gen_unique_code():
    length = 6

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