# Generated by Django 3.1.4 on 2020-12-31 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='taskmodel',
            name='title',
            field=models.CharField(max_length=40),
        ),
    ]
