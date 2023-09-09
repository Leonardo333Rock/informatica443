from django import template
from static.modulos import formato as f

register = template.Library()

@register.filter
def meu_filtro_personalizado(valor):
    valor_formatato = f.formatar_valor_br(valor)
    valor = valor_formatato.split(',')
    valor[1] = valor[1] if valor[1] != '0' else ",00"
    valor2 = valor[0]+valor[1]
    return valor2
