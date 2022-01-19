/*Sobre objetos:
No javascript,um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara,
por exemplo. Uma xícara é um objeto, com propriedades. Da mesma forma, objetos em JavaScript podem 
ter propriedades, que definem suas características.

exemplo de objeto:

*/
/* Criando um objeto

const pessoa1 = {
    nome:'Álvaro',
    sobrenome:'Veiga',
    idade:25
};
const pessoa2 = {
    nome:'Maria',
    sobrenome:'Joaquina',
    idade:45
};
console.log(pessoa1.nome)
console.log(pessoa2.nome)

*/
/*

Como pode se observar, os objetos possuem caracterísitcas dentro deles que podem ser acessadas pelo seu nome
e a característica que está dentro dele.

para tornar este exemplo menos trabalhoso e repetitivo podemos utilizar funções para isso retornando o objeto.

Esta função também pode ser conhecida como fábrica pois ela cria novos objetos.
*/

function criaPessoa (nome, sobrenome, idade) {
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoa1 = criaPessoa('Luiz','Ricardo',26)
const pessoa2 = criaPessoa('Álvaro','Veiga',25)
const pessoa3 = criaPessoa('Maria','Joaquina',24)

console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(pessoa3.nome)