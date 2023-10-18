const adicionar1 = [...document.querySelectorAll('#produto-floot')]


const carro = document.getElementById('carro')
if (!localStorage.length != '0') {
    var pdt = []
} else {
    var pdt = JSON.parse(localStorage.getItem('produto'))
}

req = adicionar1.map((e, i) => {
    e.parentNode.parentNode.children[3].children[1].addEventListener('click', (e) => {
        produto = e.target.parentNode.parentNode.children[1].children[0].innerHTML
        let valor = e.target.parentNode.parentNode.children[2].children[0].innerHTML
        let image = e.target.parentNode.parentNode.children[0].children[0].alt
        let codigo_interno = e.target.parentNode.parentNode.children[4].innerHTML
        let val_formate = valor.split(';')[1]
        pdt.push({ 'produto': produto, 'valor': val_formate, 'img': image, 'codigo_interno': codigo_interno })
        let pdt1 = JSON.stringify(pdt)
        localStorage.setItem('produto', pdt1)
        const arr = JSON.parse(localStorage.getItem('produto'))
        carro.innerHTML = arr.length
        console.log(e.target.parentNode.parentNode.children[0].children[0].alt)
    })
})

const add2 = document.getElementById('add2')
add2.addEventListener('click', (e) => {
    const popup = document.querySelector('#popup')
    const gravar = document.querySelector('#ocultar')
    var nome = document.querySelector('#nome')
    var cpf = document.getElementById('cpf')
    var rua = document.getElementById('rua')
    var referencia = document.getElementById('referencia')
    var cidade = document.getElementById('cidade')
    var bairro = document.getElementById('bairro')
    var numero = document.getElementById('numero')
    var pg = [...document.getElementsByClassName('form-check-input')]


    popup.classList.remove('ocultar')
    popup.setAttribute('class', 'container-fluid popup')

    produto = e.target.parentNode.parentNode.children[0].innerHTML
    let valor = e.target.parentNode.parentNode.children[1].children[0].children[0].innerHTML
    let image = e.target.parentNode.parentNode.parentNode.children[0].alt
    let codigo_interno = e.target.parentNode.children[1].innerHTML

    let vl_formate = valor.split(' ')[1]
    var msg = 'Produto: ' + produto + "\n Valor: " + "*" + vl_formate + "*" + '\n\n' + `Codigo interno: *${codigo_interno}*`

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var numeroTelefone = '5599991809759';

    gravar.addEventListener('click', (e) => {
        let pagamento = pg.find(e => e.checked)
        dadosCliente = {
            'nome': nome.value,
            'cpf': cpf.value,
            'rua': rua.value,
            'referencia': referencia.value,
            'cidade': cidade.value,
            'bairro': bairro.value,
            'numero': numero.value,
            'pg': pagamento.value
        }

        var mensagem = msg + "\n_________________________\n" + `\nForma de pagamento: *${dadosCliente['pg']}*\n\nCliente: ${dadosCliente['nome']}\nCPF: ${dadosCliente['cpf']}\nEndereço: ${dadosCliente['rua']}, ${dadosCliente['bairro']} N° ${dadosCliente['numero']}, ${dadosCliente['cidade']}\nPonto de referencia: ${dadosCliente['referencia']}`

        if (isMobile) {
            var url = 'whatsapp://send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
            window.location.href = url;
        } else {
            var webUrl = 'https://web.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
            window.open(webUrl);
        }

    })

})
