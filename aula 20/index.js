/*

Sobre operadores lógicos:

Os operadores lógicos como o próprio nome diz eles realizam eventos de lógica dentro do javascript e servem para
checar mais de uma operação de um ou mais eventos. Em javascript temos os seguintes operadores lógicos:

&& -> AND -> E (Todas as expressões com '&&' precisam ser verdaderias, caso contrário, se durante uma operação
                de uma expressão houver falso, toda a expressão será validade como falso)

|| -> OR -> OU (Se uma das expressões retorna tanto algo verdadeiro quanto falso, todas elas terão um resultado
                verdadeiro independente da situação for verdadeira ou falsa. Já se ambas tiverem um resultado
                onde ambas são falsas, retornará um valor falso ou se as mesmas tiverem somente um valor
                verdadeiro retornarão um valor verdadeiro para as duas).

! -> NOT -> NÃO(Esta irá inverter os valores da expressão, ou seja, se um determinado valor de uma expressão é
                verdadeiro, colocando o '!' no inicio ele passa a ser um valor falso e virce-versa).

Vejamos como utilizamos estes operadores em valores:

*/

//exemplos com &&: 
const expressão1 = true && true && true &&true;
const expressão2 = true && true && true && false;

console.log(expressão1);
console.log(expressão2);

//exemplos  com ||:

const expressão3 = true || false;
const expressão4 = false || false;
const expressão5 = true || true;

console.log(expressão3);
console.log(expressão4);
console.log(expressão5);

//exemplos com !:

const expressão6 = !true;
const expressão7 = !false;

console.log(expressão6);
console.log(expressão7);

