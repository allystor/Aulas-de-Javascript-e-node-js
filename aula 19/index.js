/*
Sobre lógica de programação:
Lógica de programação é a técnica de encadear pensamentos para atingir determinado objetivo. Estes 
pensamentos, podem ser descritos como uma seqüência de instruções, que devem ser seguidas para se cumprir 
uma determinada tarefa. Seqüência Lógica são passos executados até atingir um objetivo ou solução de um problema.
Em javascript podemos ter uma base na lógica que podem ser apresentadas em operadores lógicos, operadores
de comparação, estruturas de condição e estruturas de repetição.

Operadores de comparação: estes operadores servem para comparar uma um valor com outro. São estes 
maior que: '>' 
maior ou igual que: '>='
menor ou igual que: '<='
menor que: '<'
igual a: '=='(valor)
igualdade  estrito: '==='(valor e tipo)
diferente: '!='(valor)
diferença estrita: '!=='(valor e tipo)
é nesta parte em que começão a ser mais intensos os resultados de boleans para retornarem um a um valor
verdadeiro ou falso.
exemplo:
*/

console.log(10 > 5);

console.log(5 < 0);

console.log(3 >= 2);

console.log(2 <= 3);

console.log( 10 == '10');// number e string

console.log( 10 === '10');

console.log( 9 != '9');

console.log(9 !== '9');

/*
A principal diferença dos operadores restritos é sua validação de valores por exemplo se queremos igualar um
number de uma string com '==' ou'!=' ocorre um evento chamado corsão de tipos ou type coercion, o que nada mais é do que
converter um tipo em outro, em outras palavras o javascript deduz que o valor em string é algo próximo ou mesmo
igual ao valor number e deduz algo que o usuário queira fazer podendo gerar algum efeito negativo no código.
Por isso utilizamos o operador estrito '===' ou '!==' para checar tanto o valor quanto o tipo e poder definir
o valor verdade ou falsa entre eles ou seja um number e uma string são valores diferentes.
exemplo:
 (7 !='7') o javascript entende entende que sim então retorna como verdadeiro.
 (7 !=='7') o javascript entende entende que há uma string então retorna como falso.
 */