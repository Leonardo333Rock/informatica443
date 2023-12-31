from django.shortcuts import render, redirect
from . models import Cliente, Produtos, Pedido
from static.modulos import formato as f
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse

def Home(request):
    produto = Produtos.objects.all()
    pedido = Pedido()
    cookie = request.COOKIES.get('numero_do_pedido')
    if not cookie:
        pedido.save()
        numero_do_pedido = len(Pedido.objects.all())
        print(numero_do_pedido)
        response = render(request,'home.html',{'produto':produto})
        response.set_cookie('numero_do_pedido',numero_do_pedido)
        return response
    else:
        print(cookie)
        return render(request,'home.html',{'produto':produto})
        

def pagina_de_cadastro(request):
    if request.method == "GET":
        return render(request,'paginas/pg_de_dacastro.html')
    else:
        nome = request.POST.get('nome')
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        user = User.objects.create_user(username=nome,email=email,password=senha)
        user.save()
        return render(request,'paginas/pg_de_dacastro.html')


def editar_cadastro(request,id):
    cliente = Cliente.objects.get(id=id)
    return render(request,'paginas/editar_cad.html',{'cliente':cliente,'id':id})

def editado_sucesso(request):
    id = request.POST.get('id')
    cliente = Cliente.objects.get(id=id)
    cliente.nome = request.POST.get('nome')
    cliente.email = request.POST.get('email')
    cliente.senha = request.POST.get('senha')
    cliente.telefone = request.POST.get('telefone')
    cliente.save()
    return render(request,'home.html',{'id':id})

def produto(request,str):
    pdt = str
    produto = Produtos.objects.all()
    return render(request,'paginas/produtos.html',{'pdt':pdt,'produto':produto})

def pg_de_login(request):
    produto = Produtos.objects.all()
    if request.method == "GET":
        return render(request,'paginas/pagina_de_login.html')
    username =  request.POST.get('username')
    senha =  request.POST.get('senha')
    user = authenticate(username=username, password=senha)

    if user:
        login(request, user)
        return render(request,'adm/adm.html',{'produto':produto})
    else:
        return render(request,'paginas/pagina_de_login.html')
     
@login_required(login_url='pagina_de_login')    
def cadastrar_produto(request):
    if request.method == 'GET':
        return render(request,'pg_produtos/cadastro_de_produtos.html')
    else:
        id = Produtos.objects.all()
        produto = Produtos()
        produto.produto = request.POST.get("produto").upper()
        produto.valor = request.POST.get("valor")
        produto.quantidades = request.POST.get('quantidade')
        produto.codigo_interno = request.POST.get('codigo_interno')
        produto.promocao = request.POST.get('promocao')
        produto.descricao = request.POST.get("descricao").upper()
        classe = request.POST.get('classe')
        classe_reple = classe.replace(" ","_")
        produto.classe = classe_reple
        produto.link_img = f"../../static/img/{classe_reple}/{classe_reple}{len(id)+1}.jpg"
        produto.save()
        return redirect('cadastro_de_produtos')


def ver_mais(request,id):
    produto = Produtos.objects.get(id=id)
    print(produto.link_img)
    link_ft = produto.link_img.split('../..')[1]
    print(link_ft)
    valor_formatato = f.formatar_valor_br(produto.valor)
    valor = valor_formatato.split(',')
    valor[1] = valor[1] if valor[1] != '0' else ",00"
    valor2 = valor[0]+valor[1]

    return render(request,'pg_produtos/ver_mais.html',{'produto':produto,'valor':valor2,'link_ft':link_ft})

@login_required(login_url='pagina_de_login')
def editar_produto(request,id):
    produto = Produtos.objects.get(id=id)
    return render(request,'pg_produtos/editar_produto.html',{"produto":produto,"id":id})

def editado_sucesso(request):
    id = request.POST.get('id')
    produto = Produtos.objects.get(id=id)
    produto.produto = request.POST.get('produto')
    produto.valor = request.POST.get('valor')
    produto.quantidades = request.POST.get('quantidade')
    produto.codigo_interno = request.POST.get('codigo_interno')
    produto.promocao = request.POST.get('promocao')
    produto.descricao = request.POST.get("descricao").upper()
    classe = request.POST.get('classe')
    classe_reple = classe.replace(" ","_")
    produto.classe = classe_reple
    produto.link_img = f"../../static/img/{classe_reple}/{classe_reple}{id}.jpg"
    produto.save()
    return redirect('busca_cdi')


def servicos(request):
    return render(request,'pg_servicos/servicos.html')

def carrinho(request):
    produto = Produtos.objects.all()
    return render(request,'pg_produtos/carrinho.html',{'produto':produto})


def busca(request):
    produto = Produtos.objects.all()
    busca = request.POST.get('busca').upper()
    print(busca)

    return render(request,'pg_produtos/busca.html',{'produto':produto, 'busca': busca})


@login_required(login_url='pagina_de_login')
def pdt_faltando(request):
    produto = Produtos.objects.all()
    return render(request,'adm/pdt_faltando.html',{'produto':produto})

@login_required(login_url='pagina_de_login')
def produto_adm(request,str):
    pdt = str
    produto = Produtos.objects.all()
    return render(request,'adm/produtos_adm.html',{'pdt':pdt,'produto':produto})

@login_required(login_url='pagina_de_login')
def busca_adm(request):
    produto = Produtos.objects.all()
    busca = request.POST.get('busca').upper()
    print(busca)
    return render(request,'adm/busca_adm.html',{'produto':produto, 'busca': busca})

@login_required(login_url='pagina_de_login')
def busca_cdi(request):
    if request.method == "GET":
        return render(request,'adm/busca_cdi.html')
    elif request.method == "POST":
        try:
            produto = Produtos.objects.all()
            busca = int(request.POST.get('busca'))
            return render(request,'adm/produtos_cdi.html',{'produto':produto, 'busca': busca})
        except:
            return render(request,'adm/busca_cdi.html')