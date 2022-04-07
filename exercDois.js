// entrega.segunda.semana
// 2

// Calcule o tempo de uma viagem de carro.
// Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

// vou utilizar o console para simular a entrada de um usuário, hahaha

// pergunto a distância
console.log("olá, qual lonjura vai correr?")
// entrada do usuario
let distancia = 162

// peço que o console mostre a distancia inserida
console.log(`${distancia} km`)

// pergunto a velocidade
console.log("e que velocidade você corre?")

// entrada do usuário
let velocidade = 80

// peço que o console mostre a velocidade inserida
console.log(`${velocidade} km/h`)

// vou calcular o tempo que demoraria essa viagem com os dados recebidos
let tempo = distancia / velocidade

// o console me mostra o tempo
console.log(`então você deve levar cerca de ` + tempo.toFixed(0) + ` horas`)

// utilizo o resto das horas para calcular os minutos

let minutos = 0.025 * 60
console.log(minutos)
