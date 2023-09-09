def formatar_valor_br(valor):
    valor_str = str(valor)
    partes = valor_str.split(".")
    parte_inteira = partes[0]
    parte_decimal = partes[1] if len(partes) > 1 else "00"
    
    parte_inteira_formatada = ""
    for i, digito in enumerate(reversed(parte_inteira)):
        if i > 0 and i % 3 == 0:
            parte_inteira_formatada = "." + parte_inteira_formatada
        parte_inteira_formatada = digito + parte_inteira_formatada
    
    valor_formatado = parte_inteira_formatada + "," + parte_decimal
    return valor_formatado