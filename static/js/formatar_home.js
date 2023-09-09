const valor = document.querySelectorAll('#produto-floot')

function formatarValorUSDparaBRL(valorUSD) {
    const valorBRL = valorUSD.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorBRL;
  }
  
for(let x in valor){
    if(valor[x].innerHTML){
        vl1 = valor[x].innerHTML.split('.')[0]
        vl2 = parseInt(valor[x].innerHTML.split(' ')[1])
        valor[x].innerHTML = formatarValorUSDparaBRL(vl2)
        
    }
}


