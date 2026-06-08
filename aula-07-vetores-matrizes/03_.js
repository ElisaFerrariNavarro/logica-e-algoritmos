const prompt = require('prompt-sync') ();

// O vetor que irá armazenar os 5 números
let numeros = (prompt("Digite 5 números (sem vírgula mas com espaçamento entre um e outro):  "))

for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}
