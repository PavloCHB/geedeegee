# Generated by Django 3.2.20 on 2023-09-20 00:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='name',
            field=models.CharField(max_length=20),
        ),
    ]
