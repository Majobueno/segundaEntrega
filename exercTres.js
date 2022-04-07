// entrega.segunda.semana
// 3

// Crie um algoritmo que leia o valor de um jantar,
// calcule e informe o valor da taxa do garçom (10%)
// e o valor total a ser pago.

// uma varíavel para o valor do jantar
let jantar = 45
// pro console mostrar tudo
console.log(`a comida custou R$ ${jantar}`)

// calculando a taxa
const garçom = 0.10 * jantar
// para exibir o valor calculado
console.log("10% do garçom é R$" + garçom.toFixed(2))

//calculando o valor total
let total = jantar + garçom
// exibindo o total
console.log(`o jantar ficou no total R$ ${total.toFixed(2)}`)