const prompt = require('prompt-sync') ();

let precos = [];
let maior, menor;


for (let i = 0; i <6; i++) {
    precos[i] = parseFloat(prompt(`Digite o preço do produto ${i + 1}: `));

    if (i === 0){
        maior = precos[i];
        menor = precos[i];
    }
    if (precos [i] > maior) {
        maior = precos[i];
    }
    if (precos [i] < menor) {
        menor = precos[i];
    }
}

console.log ("\nMaior preço: R$ " + maior.toFixed(2));
console.log("Menor preço: R$ " + menor.toFixed(2));