//
const prompt = require('prompt-sync')();

// Título
console.log("");
console.log("---Tabuada---");
console.log("");

//pergunta
let numero = Number(prompt("Digite um número para gerar a tabuada: "));

console.log("");


//laço para gerar a tabuada
for (let i = 1; i <= 10; i++){
    console.log(numero + " X " + i + " = " + (numero * i))
}
console.log("-------------")
