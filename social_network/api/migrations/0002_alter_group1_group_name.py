# Generated by Django 4.0.4 on 2022-05-15 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group1',
            name='group_name',
            field=models.CharField(default='TPMDJKLNSSWINZN', max_length=20, unique=True),
        ),
    ]
