# Generated by Django 4.2.1 on 2023-09-13 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aulaGit', '0002_produtos'),
    ]

    operations = [
        migrations.AddField(
            model_name='produtos',
            name='codigo_interno',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
