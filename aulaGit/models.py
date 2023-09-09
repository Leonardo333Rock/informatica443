from django.db import models

class Cliente(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.TextField(max_length=255)
    email = models.TextField(max_length=255)
    senha = models.TextField(max_length=255)
    telefone = models.TextField(max_length=255)


class Produtos(models.Model):
    id = models.AutoField(primary_key=True)
    produto =  models.TextField(max_length=255)
    valor = models.FloatField()
    descricao = models.TextField(max_length=350)
    link_img = models.TextField(max_length=255)
    quantidades = models.IntegerField()
    classe =  models.TextField(max_length=255) 
    
