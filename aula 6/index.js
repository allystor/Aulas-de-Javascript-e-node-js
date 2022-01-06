//operadores primitívos: strings(twxtos), number(número), undefined(indefinido), null(nulo), boolean(boleano)
const nome ='ALVARO'; //string
const nome1 ="ALVARO"; //string
const num = 10; //number
const num1 = 10.50; //number
let nomeAluno; //undefined = não aponta memória em nenhum local
let sobrenomeAluno = null; //nulo = não aponta para local algum da memória
const boolean = true; //boleano = valor boleano só transmite os valores de verdadeiro ou falso(lógica)

console.log(typeof nome, nome);

const a = [1, 2]
const b = a

console.log(a, b)

b.push(3)
console.log(a, b)