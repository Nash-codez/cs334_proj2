# Generated by Django 4.2.2 on 2023-06-07 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_group1_group_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group1',
            name='group_name',
            field=models.CharField(default='KLYGXXIHQZVDCJL', max_length=20, unique=True),
        ),
    ]
