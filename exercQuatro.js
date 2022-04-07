// entrega.segunda.semana

// Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado 
// pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule
// o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

// para perguntar os quilometros, uma varíavel
let kiloCorrido = 340
// pro console revelar o que se passa
console.log(`já que o cliente rodou ${kiloCorrido} quilometros`)

// quantos dias o cliente ficou com o carro?
let diasAlugado = 15
// exibindo os dias
console.log(`e ficou com o carro por ${diasAlugado} dias`)

// para calcular o preju
let aPagar = (60 * diasAlugado) + (0.15 * kiloCorrido) // 951,00
// peço que o console apresente o total
console.log(`No total o carro custou R$ ${aPagar.toFixed(2)}`)