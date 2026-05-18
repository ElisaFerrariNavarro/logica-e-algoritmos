//Instrução para poder rodar
//npm install prompt-sync

// importar módulo
const prompt = require('prompt-sync')();

// Lógica 
let nomeUsuario = prompt("Informe o nome do usuário: ");
let senha = prompt("Informe a senha: ");
console.log(""); //pula uma linha

//referências
let loginBanco = "Liss";
let senhaBanco = "143";

//condicional se + e

if (nomeUsuario === loginBanco && senhaBanco === senha) {
    console.log("Acesso Liberado!");
}else  {
    console.log("Acesso Negado!");
}
