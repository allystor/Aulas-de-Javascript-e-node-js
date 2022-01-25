/*
Exercício sobre arrays, objetos e funções.

desenvolvea um programa que peça ao usuário que insira nome, sobrenome,
altura e peso para armazenar todos os dados dentro de um array a cada
credencial enviada.

*/

function escopo() {
    const form = document.body.querySelector('form');
    const resultado = document.getElementById('resultado');
    const pessoas = [];

    function recebeEventoEnvio() {

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas.at(0))
        let pessoaAtual = pessoas.at(-1) 

        resultado.innerHTML += `<p>${pessoaAtual.nome} ${pessoaAtual.sobrenome}`+
        `${pessoaAtual.peso} ${pessoaAtual.altura}</p>`
    };
    recebeEventoEnvio();
    form.addEventListener('submit', recebeEventoEnvio);
};
escopo();