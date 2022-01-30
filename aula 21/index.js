/*

Sobre short-cuirt(curto-circuito):

Como visto nas aulas anteriores, para que todos os valores de '&&' retornem como verdadeiro, todos eles devem ser
verdadeiros pois caso haja algum valor falso o javascript entenderá que toda aquela operação é falsa. então
'&&' sempre tentará achar um valor verdadeiro de uma operação dentro do javascript, portanto valores como stings e
numbers são verdadeiros então quando utilizamos os operadores '&&' para indentificar um valor verdadeiro entre
eles sempre teremos de retorno u último valor que inserimos.

Se inserirmos um valor falso a operação de short-cuirt irá retornar o valor falso sem checar os demais valores.
Dentre alguns valores falsos temos:

false, 0, '', "", ``, null, undefined, NaN

Qualquer coisa que seja diferente dos valores acima serão avaliados como verdadeiro(true) no javascript.

exemplo:

 */

console.log('bem' && 0 && 'vindo')

console.log('Álvaro' && 1 && 'João');

//No caso inserimos um valor de string, number e string e obtivemos o valor da última string
