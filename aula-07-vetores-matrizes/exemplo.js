const prompt = require('prompt-sync') ();


const filmes = []


for (let i = 0; i< 5; i++)  {
    filmes[i] = prompt(`digite o nome do ${i + 1}° filme: `)
}

console.log("-------------") 
console.log("")

for (let i = 0; i <5; i++) {
    console.log(`Nome do ${i + 1}° filme: ${filmes[i]}`)
}



