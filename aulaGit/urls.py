from django.urls import path
from . import views 

urlpatterns = [
    path('',views.Home, name='home'),
    path('pagina_de_cadastro', views.pagina_de_cadastro,name='pagina_de_cadastro'),
    path('editar_cadastro/<int:id>',views.editar_cadastro,name="editar_cadastro"),
    path('editado_sucesso',views.editado_sucesso,name="editado_sucesso"),
    path('pagina_de_login',views.pg_de_login,name="pagina_de_login"),
    path('produto/<str>',views.produto,name='produto'),
    path('cadastro_de_produtos',views.cadastrar_produto,name="cadastro_de_produtos"),
    path('ver_mais/<int:id>',views.ver_mais,name='ver_mais'),
    path('editar_produto/<int:id>',views.editar_produto,name="editar_produto"),
    path('editado_sucesso',views.editado_sucesso,name="editado_sucesso"),
    path('servicos',views.servicos,name="servicos"),
    path('carrinho',views.carrinho,name='carrinho'),
    path('busca',views.busca,name="busca"),
    path('pdt_faltando',views.pdt_faltando,name='pdt_faltando'),
    path('produto_adm/<str>',views.produto_adm,name='produto_adm'),
    path('busca_adm',views.busca_adm,name="busca_adm"),
    path('busca_cdi',views.busca_cdi,name="busca_cdi"),

]