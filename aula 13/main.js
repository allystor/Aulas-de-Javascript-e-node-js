//Exercício:

//Faça um script para que o usuário insira um número e o programa retorne
//Sua raiz quadrada, se este número é inteiro, se é um número
//Arredondar para um número mais inferior e superior próximo e
//Mostra-lo com casas decimais. 

const numero = prompt("Bem-vindo digite um número")
const resultado = numero
document.getElementById('resultado').innerHTML = resultado
document.body.innerHTML +=`A raiz quadrada de seu número é inteiro: <strong>${Math.sqrt(numero)}</strong>`
document.body.innerHTML +=`${numero} este número é: <strong>${Number.isInteger(numero)}</strong>`
document.body.innerHTML +=`Este número é NaN: <strong>${Number.isNaN(numero)}</strong>`
document.body.innerHTML +=`Este número arendondado para para o seu inferior é igual à: <strong>${Math.ceil(numero)}</strong>`
document.body.innerHTML +=`Este número arendondado para para o seu superior é igual à: <strong>${Math.ceil(numero)}</strong>`
document.body.innerHTML +=`Este número com casas decimais é igual à: <strong>${Number.toFixed(numero)}</strong>`
