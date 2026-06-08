const prompt = require ('prompt-sync');

let listaProdutos = []

for (let i = 0; i < 5; i++) {
    let produto = prompt(`Digite o nome do ${i + 1}º produto:`);
    listaProdutos.push(produto);
}

console.log("")
console.log("--- Lista de Compras (￣▽￣) ---");
for (let i = 0; i < listaProdutos.length; i++) {
    console.log(`${i + 1} - ${listaProdutos[i]}`);
}
