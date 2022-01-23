/*Sobre valores primitivos e valores por referência*/
/*

Em JavaScript têm valores primitivos: Undefined, Null, Boolean, String e Number. Valores primitivos como 
undefined , null , true , "texto" e 10 são imutáveis. Undefined e Null são tipos especiais que possuem um só 
valor cada, respectivamente undefined e null .

Já os valores por referênciam valor de referência é dinâmico, o JavaScript armazena o valor de referência no heap.
Se o valor for um tipo primitivo, ao acessar a variável, você manipula o valor real armazenado nessa variável. 
Em outras palavras, a variável que armazena um valor primitivo é acessada por por valor.

*/
let a = 'a';
let b = a; // cópia
console.log(a,b)
a = 'outra coisa'
console.log(a,b)

/*

Quando criamos um dado de um valor primitívo imutável, significa que o dado se torna único dentro de suas pro-
priedades, ou seja, se criamos a variável 'a' e concatenamos ela a um dado primitivo como uma string e  criamos
outra variável 'b' com o valor de string que no caso possui a unica função de cópia da variável 'a', 
ela receberá apenas uma vez o valor de 'a', logo se alterarmos o dado para outro valor a outra string
perderá a função de cópiar a variável 'a', ou seja, 'a' se torna um valor imutável.

*/

/*

Os próprios valores por referencia são valores mutaveis, ou seja, mutável é o tipo da variável que pode ser 
alterada. Em JavaScript, somente objetos e arrays são mutáveis, valores primitivos não. Um objeto mutável é um 
objeto cujo estado pode ser modificado após sua criação. Imutáveis são os objetos cujo o estado não podem ser 
mudados uma vez criados. Como exemplos de valores mutáveis os mais conhecidos são os arrays, objetos e funções.

*/
let c = [1, 2, 3];
let d = c;
console.log(c, d);
a.push(4);
console.log(c, d);

/*

Quando criamos um array 'c' e concaternamos outro array 'd' ambas alteções que fizermos dentro de qualquer
um deles, ambos terão o resultado dessa alteração como no exemplo acima onde criamos uma sequencia de
números para os dois arrays e inserimos um número a mais para 'c' o array 'd' também adiciona o valor para
seu array.

*/