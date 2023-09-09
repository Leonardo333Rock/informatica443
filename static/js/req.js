const adicionar1 = [...document.querySelectorAll('#produto-floot')]


const carro = document.getElementById('carro')
if(!localStorage.length != '0'){
    var pdt = []
}else{
    var pdt = JSON.parse(localStorage.getItem('produto'))
}

req = adicionar1.map((e,i)=>{
    e.parentNode.parentNode.children[3].children[1].addEventListener('click',(e)=>{
        produto = e.target.parentNode.parentNode.children[1].children[0].innerHTML
        let valor = e.target.parentNode.parentNode.children[2].children[0].innerHTML
        let image = e.target.parentNode.parentNode.children[0].alt
        let val_formate = valor.split(';')[1]
        pdt.push({'produto':produto,'valor':val_formate,'img':image})
        let pdt1 = JSON.stringify(pdt)
        localStorage.setItem('produto',pdt1)
        const arr = JSON.parse(localStorage.getItem('produto'))
        carro.innerHTML = arr.length
        console.log(e.target.parentNode.parentNode.children[0].alt)
    })     
})

const add2 = document.getElementById('add2')
add2.addEventListener('click',(e)=>{
    produto = e.target.parentNode.parentNode.children[0].innerHTML
    let valor = e.target.parentNode.parentNode.children[1].children[0].children[0].innerHTML
    let image = e.target.parentNode.parentNode.parentNode.children[0].alt
    let vl_formate = valor.split(' ')[1]
    var msg = 'Produto: '+ produto +"\n Valor: " + vl_formate
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var numeroTelefone = '5599984146460';
    var mensagem = msg
    if (isMobile) {
      var url = 'whatsapp://send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
      window.location.href = url;
    } else {
      var webUrl = 'https://web.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
      window.open(webUrl);
    }
})
