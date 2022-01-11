//Sobre math e números em javascript.

let num1 = 1;//número
let num2 = 2.5;//número

console.log(num1 + num2);

//No javascript também é possível concatenar números para isso criamos um parametro para a variavel com o .toString().

//Exemplo:

console.log(num1.toString() + num2);

//Além disso é possivel representarmos as vesões binárias das com o método to string.

//Exemplo:

let num3 = 10//número

console.log(num3.toString(2))

//Se algumas variáveis possuir números com varias casas decimais também é possível arrendodar utlizando .tofixed().

//exemplo

let num4 = 3.1415436454

console.log(num4.toFixed(2))

//É possível também diferenciar numeros inteiros, finitos ou infinitos e se é um numero ou não 
//com os parâmetros Number.isInteger(), Number.isFinite(), Number.isNaN() e onde irão retornar um true ou false para indicar suas veracidades.

//exemplo

let num5 = 33.3

console.log(Number.isInteger(num5))
console.log(Number.isFinite(num5))
console.log(Number.isNaN(num5))
