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
            nome: nome.Value,
            sobrenome: sobrenome.Value,
            peso: peso.Value,
            altura: altura.Value
        });
        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.Value} ${sobrenome.Value}`+
        `${peso.Value} ${altura.nValue}</p>`
    };
    recebeEventoEnvio();
    form.addEventListener('submit', recebeEventoEnvio);
};
escopo();