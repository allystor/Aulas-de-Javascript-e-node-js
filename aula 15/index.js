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
    console.log(`bom dia ${nome}`)
}
saudação('álvaro')