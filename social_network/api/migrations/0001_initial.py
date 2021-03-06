# Generated by Django 4.0.4 on 2022-05-15 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default='', max_length=8, unique=True)),
                ('host', models.CharField(max_length=60, unique=True)),
                ('guest_can_pause', models.BooleanField(default=False)),
                ('votes_to_skip', models.IntegerField(default=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Group1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prof_pic', models.ImageField(blank=True, null=True, upload_to='')),
                ('group_name', models.CharField(default='', max_length=20, unique=True)),
                ('group_admin', models.CharField(max_length=60)),
                ('category1', models.CharField(max_length=25)),
                ('category2', models.CharField(max_length=25)),
                ('category3', models.CharField(max_length=25)),
            ],
        ),
    ]
