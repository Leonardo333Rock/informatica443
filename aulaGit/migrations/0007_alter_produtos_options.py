# Generated by Django 4.2.1 on 2023-11-13 17:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('aulaGit', '0006_alter_produtos_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='produtos',
            options={'ordering': ['classe', 'valor']},
        ),
    ]
