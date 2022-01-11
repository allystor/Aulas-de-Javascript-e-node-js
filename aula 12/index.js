//Sobre o objeto math:
//O objeto math é utilizado recorrentemente em javascript pois ele possui diversas funciões
//de matemática para que usuário possa usurfluir das funções tanto em sites quanto em programas.
//Por exemplo se eu possuo um número que tem várias casas decimais e eu quero arrendondar ele podemos
//fazer da seguinte maneira.

let num1 = 10.1532563;
let num2 = Math.floor(num1);

console.log(num2);

//Nesse caso eu utlizo o número em outra variável com o objeto Math.floor para poder arrendonda-lo para o mais inferior próximo.

let num3 = Math.ceil(num1)

console.log(num3)

//já com o .ceil ele é arrendondado para o numero superior mais próximo.

//Funções também são comuns em objetos e se tratando de math possuem várias funções dentro dele.

let num4 = Math.round(num1)

console.log(num3)

//No caso da função .round() ela segue quase a mesma função do .floor só que com outras funções e
//além de arrendondar um número para o seu mais próximo só que sem casas decimais.

//Para acharmos o maior ou menor número de uma sequência de números fazemos da seguinte forma.

console.log(Math.max(1,2,3,4,5,6,7))
console.log(Math.min(1,2,3,4,5,6,7))

//Seguindo com o math também é possível utlizarmos o.random() para gerarmos números de maneira aleatória.
//Vale lembrar que o math.random é muito utlizado nas funções de sites e programas para gerar mais intaratividade.

const num5 = Math.random();

console.log(num5)

//E para gerarmos um número aleatório determinando um indice de números fazemos desta maneira:

