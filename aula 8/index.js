//Mais sobre strings
//Utilizamos [] ou .charAt() para controlar um elemento dentro de uma string
//Exemplo:
//               01234567
let umaString = "um texto";

console.log(umaString[4])

console.log(umaString.charAt(7))
//se o número escolhido não atinge o número de elementos dentro da strings o motor mostrará'undefined'


//Utiizamos.concat para poder concatenar uma string a uma outra string
//Exemplo:

console.log(umaString.concat('em','um','lindo dia'))

//ou sem virgulas

console.log(umaString.concat('em um lindo dia'))

//ou sem .concat

console.log(umaString + 'em um lindo dia')

//ou com templatestring

console.log(`${umaString} em um lindo dia`)

//para determinar o indice de quando um uma palavra começa utilizamos .indexOf() para descobrimos

console.log(umaString.indexOf('texto'))

//para determinar uma expressão regula, utilizamos .match 

console.log(umaString.match(/[a-z]/))

//utilizamos o .replace para alterarmos ou não a expressão regular

console.log(umaString.replace('um', 'outra'))

//para determinarmos tamanho de uma string utilizamos .lenght

console.log(umaString.length)

//e determinarmos apenas algumas partes da string utilizamos .slice das seguintes maneiras:

//do indice que começa ao indice que termina de maneira crescente
console.log(umaString.slice(0, 2))

//do indice que começa ao indice que termina de maneira decrescente
console.log(umaString.slice(-3))

// e por fim para remover alguma letra ou número de uma string utilizamos o .split

console.log(umaString.split('t'))