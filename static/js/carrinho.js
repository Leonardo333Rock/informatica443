const popup = document.querySelector('#popup')
const gravar = document.querySelector('#ocultar')
var mostar = document.querySelector('#mostar')
var nome = document.querySelector('#nome')
var cpf = document.getElementById('cpf')
var rua = document.getElementById('rua')
var referencia = document.getElementById('referencia')
var cidade = document.getElementById('cidade')
var bairro = document.getElementById('bairro')
var numero = document.getElementById('numero')
var close = document.getElementById('close')
var pg = [...document.getElementsByClassName('form-check-input')]



close.addEventListener('click', (e) => {
  popup.setAttribute('class', 'container-fluid ocultar')
  carro.setAttribute('class', 'container')

})



gravar.addEventListener('click', (e) => {
  // let cookies = document.cookie.split(';')
  // let cookie = cookies.filter(e=>e == e.match(/ numero_do_pedido=(\d+)/ig))
  // let co = cookie[0].split('=')[1]
  let pagamento = pg.find(e => e.checked)
  console.log(pagamento.value)
  popup.setAttribute('class', 'container-fluid ocultar')
  carro.setAttribute('class', 'container')
  dadosCliente = {
    'nome': nome.value,
    'cpf': cpf.value,
    'rua': rua.value,
    'referencia': referencia.value,
    'cidade': cidade.value,
    'bairro': bairro.value,
    'numero': numero.value,
    'pg': pagamento.value,
    // 'pedido' : co
  }

  if(dadosCliente['nome'] != '' && dadosCliente['cpf'] != '' && dadosCliente['rua'] != '' && dadosCliente['numero'] != ''){
    localStorage.setItem('dadosCliente', JSON.stringify(dadosCliente))
  }else{
    alert('Preencha todos os campos')
  }


})

mostar.addEventListener('click', (e) => {
  if (localStorage.length > 0) {
    popup.setAttribute('class', 'container-fluid popup')
    carro.setAttribute('class', 'container ocultar')
  } else {
    alert("Adicione algum item no carrinho")
  }

})

function formatarValorUSDparaBRL(valorUSD) {
  const valorBRL = valorUSD.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return valorBRL;
}

var produtos = JSON.parse(localStorage.getItem('produto'))
var vl_total = document.getElementById('vl_total')
var v = 0
var qunatidades_de_produtos = 0
let carro = document.getElementById('carro')

produtos.map((e) => {
  let caixa = document.createElement('div')
  let div_head = document.createElement('div')
  let div_body = document.createElement('div')
  let div_info = document.createElement('div')


  let produto = document.createElement('p')
  let valor = document.createElement('p')
  let quantidade = document.createElement('p')
  let valor_total = document.createElement('p')
  let div_img = document.createElement('div')
  let span_qt = document.createElement('span')
  let span_vlt = document.createElement('span')
  let img = document.createElement('img')

  let del = document.createElement('img')
  del.setAttribute('src','../../static/img/lixo.svg')
  del.setAttribute('class','img_del')
  del.setAttribute('id', 'del')
  caixa.appendChild(del)

  let i = document.createElement('i')
  i.innerHTML = qunatidades_de_produtos
  i.setAttribute('hidden', true)
  caixa.appendChild(i)

  caixa.setAttribute('class', 'border p-2 my-2')

  img.setAttribute('style', "width:100; height: 100px;")
  img.setAttribute('src', e['img'])

  div_body.setAttribute('class', 'row')
  div_img.setAttribute('class', 'col')
  div_info.setAttribute('class', 'col d-flex')

  produto.setAttribute('class', 'm-3')
  valor.setAttribute('class', 'm-3')
  quantidade.setAttribute('class', 'm-3')
  valor_total.setAttribute('class', 'm-3')

  produto.innerHTML = e['produto']
  valor.innerHTML = 'Valor: ' + e['valor']
  quantidade.innerHTML = 'Quantidade '
  valor_total.innerHTML = "Valor total: "
  span_qt.innerHTML = "1"
  span_vlt.innerHTML = e['valor']


  div_info.appendChild(produto)
  div_info.appendChild(valor)
  div_info.appendChild(quantidade)
  div_info.appendChild(valor_total)

  quantidade.appendChild(span_qt)
  valor_total.appendChild(span_vlt)

  div_body.appendChild(div_img)
  div_img.appendChild(img)
  div_body.appendChild(div_info)
  div_head.appendChild(produto)
  caixa.appendChild(div_head)
  caixa.appendChild(div_body)
  carro.appendChild(caixa)

  var valor_for = parseFloat(e['valor'].replace(/[.]/ig, ""))
  v += valor_for
  localStorage.setItem('valor_total', formatarValorUSDparaBRL(v))
  vl_total.innerHTML = formatarValorUSDparaBRL(v)

  qunatidades_de_produtos += 1
})



const bt = [...document.querySelectorAll("#del")]

bt.map((e) => {
  e.addEventListener('click', (el) => {
    const pd = JSON.parse(localStorage.getItem('produto'))
    const it = parseInt(el.target.parentNode.children[1].innerHTML)
    pd.splice(it, 1)
    localStorage.setItem('produto', JSON.stringify(pd))
    el.target.parentNode.remove()
    location.reload()
  })
})