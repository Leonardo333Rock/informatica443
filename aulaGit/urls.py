from django.urls import path
from . import views 

urlpatterns = [
    path('',views.Home, name='home'),
    path('pagina_de_cadastro', views.Pagina_de_cadastro,name='pg_de-cadastro'),
    path('cadastro_sucesso',views.cadastro_sucesso,name="cadastro_sucesso"),
    path('editar_cadastro/<int:id>',views.editar_cadastro,name="editar_cadastro"),
    path('editado_sucesso',views.editado_sucesso,name="editado_sucesso"),
    path('pagina_de_login',views.pg_de_login,name="pagina_de_login"),
    path('logar',views.logar,name='logar'),
    path('produto/<str>',views.produto,name='produto'),
    path('cadastro_de_produtos',views.cadastrar_produto,name="cadastro_de_produtos"),
    path('produto_cadastrado',views.produto_cadastrado,name='produto_cadastrado'),
    path('ver_mais/<int:id>',views.ver_mais,name='ver_mais'),
    path('editar_produto/<int:id>',views.editar_produto,name="editar_produto"),
    path('editado_sucesso',views.editado_sucesso,name="editado_sucesso"),
    path('servicos',views.servicos,name="servicos"),
    path('carrinho',views.carrinho,name='carrinho'),
    path('busca',views.busca,name="busca"),
    path('pdt_faltando',views.pdt_faltando,name='pdt_faltando'),
    path('produto_adm/<str>',views.produto_adm,name='produto_adm'),
    path('busca_adm',views.busca_adm,name="busca_adm"),


]