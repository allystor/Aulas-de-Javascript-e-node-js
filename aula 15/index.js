/*Sobre funções:

funções em javascript são muito utilizadas para que a ferramenta possa interagir ou executar çaões
com outros programas ou sites.

function (Determinando função) ola(Parâmetro) (Nomeando função) {
 (Manipulando função)
    console.log('ola mundo!')
};

ola(chamando função)


*Dentro de uma função a variável é unica, ou seja, se eu crio uma variável dentro de uma função com um
com um determinado tipo de objetivo, esta não ter o mesmo objetivo de outra varíavel de mesmo
nome que esteja em outra função.

*Parâmetros de funções são valores de dados que inserimos no momento em que chamamos novamente a função.


*Com as funções podemos fazer que elas interajam simutaneamente entre si, então
Se por exemplo eu desejo dar uma saudação para alguém pelo javascript mas de modo em que
eu possa utilizar a mesma função porém com um parâmetro para isso para isso.

exemplo:
*/
function saudação(nome) {
    console.log(`bom dia ${nome}`);
}
saudação('álvaro');

/*podemos também armazenar dados de funções dentro de uma variável de modo em que tenhamos que especificar
como a variável irá funcionar pois se não teremos um retoro 'undefined' porém, mesmo assim esta será
executada no programa somente não nos retornará um valor por não termos definido-o.

exemplo:
*/

function saudação(nome) {
    console.log(`bom dia ${nome}`);
}
const var1 = saudação('álvaro');
console.log(var1);

/*Para acrescentarmos um definição para esta função utilizamos o 'return' para fazer com que a váriável retorne.
o que está dentro da função porém acrescentando um retorno.

exemplo:
*/
function saudação(nome) {
    console.log(`bom dia ${nome}`);
    return 'é um prazer ter você aqui'
}
const var2 = saudação('álvaro');
console.log(var2);

/*Com o 'return' podemos simplificar nossa função para que os valores e interações possam ser retornados
de maneira mais prática.

exemplo:
*/
function saudação(nome) {
    return `bom dia ${nome}, é um prazer ter você aqui`
}
const var3 = saudação('álvaro');
console.log(var3);

/*A mais importante atividades de uma função é o envio e recebimentos de valores
com isso podemos criar estruturas de dados para que o javascript possa operar
de maneira eficiente dentro de um site ou mesmo programa.
*/
function soma1(x,y) {
    const resultado1 = x + y
    return resultado1
}
console.log(soma1(2, 2))

function soma2(x,y) {
    const resultado2 = x - y
    return resultado2
}
console.log(soma2(2, 2))

function soma3(x,y) {
    const resultado3 = x * y
    return resultado3
}
console.log(soma3(2, 2))

function soma4(x,y) {
    const resultado4 = x / y
    return resultado4
}
console.log(soma4(2, 2))

function soma5(x) {
    const resultado5 = Math.sqrt(x)
    return resultado5
}
console.log(soma5(2))

/*Outros tipos de funçlões*/
/*função anônima: é quando criamos uma função dentro de uma variável.

exemplo: determine numa função que descubra a raiz de um número
*/
const raiz = function (n) {
    return Math.sqrt(n)
};
console.log(raiz(16))