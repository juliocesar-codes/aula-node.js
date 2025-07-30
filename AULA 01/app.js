/**************************************************************************************
 * Objetivo: Apresentar comandos básicos do node.js
 * Autor: Julio Cesar
 * Data: 29/07/2025
 * Versão: 1.0
 *************************************************************************************/

// Comentário em linha
/**
 Comentário em bloco
 */

// Import da classe readline do node.JS
var readline = require('readline')

// Cria uma interface de comunicação com o terminal para entrada e saída de dados
//  interagindo com o usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question("Digite seu nome:", function(nome) {

    var nomeUsuario = nome

    if (nomeUsuario == '') {
        console.log('ERRO: Não foi possível processar a requisição, campo obrigatório')
    } else {
        // String() -> converte uma variável em String
        // toUpperCase() -> converte o conteúdo de uma variável em MAISCULO
        console.log('O nome digitado foi: ' + String(nomeUsuario).toUpperCase())
        console.log(nome)
    }
})

/*
//  Permite escrever um conteúdo de uma String ou objeto no terminal

console.log("Aula 01 de node.JS")

// Permite criar uma variável
var nome = 'Julio'

// Exemplo de concatenação de conteúdos (String + variável)
console.log("O nome digitado foi: " + nome + '!')

// concatena a crase usando a crase no lugar da aspas, para colocar a variável dentro do bloco
console.log(`O nome digitado foi: ${nome}!`)

// type() -> Retorna o tipo de dado de uma variável ou objeto
console.log(typeof(nome))

*/