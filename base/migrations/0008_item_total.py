# Generated by Django 3.2.20 on 2023-09-20 23:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_auto_20230920_0035'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='total',
            field=models.PositiveBigIntegerField(default=0),
            preserve_default=False,
        ),
    ]
