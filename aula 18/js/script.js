/*
Exercício sobre arrays, objetos e funções.

desenvolvea um programa que peça ao usuário que insira nome, sobrenome,
altura e peso para armazenar todos os dados dentro de um array a cada
credencial enviada.

*/

function escopo() {
    const form = document.body.querySelector('.form');
    const resultado = document.getElementById('resultado');
    const pessoas = [];

    function recebeEventoEnvio() {

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push ({
            nome:nome.nodeValue,
            sobrenome: sobrenome.nodeValue,
            peso:peso.nodeValue,
            altura:altura.nodeValue
        });
        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.nodeValue} ${sobrenome.nodeValue} ${peso.nodeValue} ${altura.nodeValue}</p>`
    };
    recebeEventoEnvio();
    form.addEventListener('submit', recebeEventoEnvio);
};
escopo();