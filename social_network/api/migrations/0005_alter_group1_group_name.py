# Generated by Django 4.2.2 on 2023-06-07 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_user_alter_group1_group_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group1',
            name='group_name',
            field=models.CharField(default='QZIVHWFVDTVTMBS', max_length=20, unique=True),
        ),
    ]
