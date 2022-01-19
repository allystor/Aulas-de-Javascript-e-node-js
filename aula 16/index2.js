/*

Como pode se observar, os objetos possuem caracterísitcas dentro deles que podem ser acessadas pelo seu nome
e a característica que está dentro dele.

para tornar este exemplo menos trabalhoso e repetitivo podemos utilizar funções para isso retornando o objeto.

Esta função também pode ser conhecida como fábrica pois ela cria novos objetos.
*/

/*criando a função*/
function criaPessoa (nome, sobrenome, idade) {
    return{
        nome,sobrenome,idade
    };
}
/*Caracterizando o objeto */
const pessoa1 = criaPessoa('Luiz','Ricardo',26)
const pessoa2 = criaPessoa('Álvaro','Veiga',25)
const pessoa3 = criaPessoa('Maria','Joaquina',24)
/*Resposta da função*/
console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(pessoa3.nome)
