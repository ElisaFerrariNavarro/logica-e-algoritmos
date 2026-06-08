const prompt = require('prompt-sync') ();

let pratos = [];
let precos = [];

for (let i = 0; i < 4; i++) {
    pratos[i] = prompt(`Digite o nome do prato ${i + 1}: `)
    precos[i] = parseFloat(prompt(`Digite o preço do prato ${i + 1}: `))
}

console.log("\n~~~~~Menu~~~~")


for (let i = 0; i < 4; i++) {
    console.log(`${i + 1}. ${pratos[i]} - R$ ${precos[i]. toFixed(2)}`)
}

let escolha = parseInt(prompt("\nEscolha um dos pratos (de 1 a 4): "));

console.log("\nSua escolha foi: " + pratos[escolha - 1]);
console.log("Preço: R$ " + precos[escolha - 1]. toFixed(2));