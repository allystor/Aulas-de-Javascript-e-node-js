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
outra string que no caso possui a unica função de cópia da variável 'a', ela receberá apenas uma vez o valor de
'a', logo se alterarmos o dado para outro valor a outra string perderá a função de cópiar a variável 'a'

*/