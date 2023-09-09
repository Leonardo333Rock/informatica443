var mensagem_doc = document.getElementById('mensagem').innerHTML
function abrirWhatsApp(){
  if(localStorage.length == 3){
      var msg = ""
      var v = localStorage.getItem('valor_total')
      const arr = JSON.parse(localStorage.getItem('produto'))
      const dadosCliente = JSON.parse(localStorage.getItem('dadosCliente'))

      if(localStorage.length > 0){
      msg1 = arr.map((e)=>{
          msg += `Produto: ${e['produto']}\nValor: ${e['valor']}\n\n`
      })
      }else{
        msg = mensagem_doc
      }

      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      var numeroTelefone = '5599991809759';
      var mensagem = msg + "_________________________\nVALOR TOTAL: " + v + `\nForma de pagamento: *${dadosCliente['pg']}*\n\nCliente: ${dadosCliente['nome']}\nCPF: ${dadosCliente['cpf']}\nEndereço: ${dadosCliente['rua']}, ${dadosCliente['bairro']} N° ${dadosCliente['numero']}, ${dadosCliente['cidade']}\nPonto de referencia: ${dadosCliente['referencia']}`
      if (isMobile) {
        var url = 'whatsapp://send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
        window.location.href = url;
      } else {
        var webUrl = 'https://web.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
        window.open(webUrl);
      }

    setTimeout((e)=>{
      location.reload(true)
      localStorage.clear()
    },3000)

  }else{
    alert("VERIFIQUE SE SEUS DADOS ESTÃO CORRETOS")
  }
  }

  let bnt = document.getElementById('bnt')
  bnt.addEventListener('click',abrirWhatsApp)

