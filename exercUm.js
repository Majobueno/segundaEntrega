// entrega.segunda.semana
// 1 

// Solicite o preço de uma mercadoria
//  e o percentual de desconto 20%. 
// Exiba no console o valor do desconto e o preço a pagar


//para solicitar o preço de uma mercadoria 
let mercadoria = 80 //deopis de aprender, vou solicitar pro usuario por ex
//exibo o preço
console.log(`o preço do produto é R$ ${mercadoria}`)

// calcular o desconto e aprensetar
const desconto = 0.20*mercadoria
console.log(`o valor o desconto é R$ ${desconto}`)

// para calcular o resultado e aprensentar
let total = mercadoria - desconto
console.log(`o Total a pagar é R$` + total)

