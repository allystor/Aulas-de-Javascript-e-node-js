//Sobre arrays

//Em javascript arrays podem ser descrito como listas ou uma seleção de coleção de strings e números podendo ser manipulados
//Dentro de um array de maneira simples

//Strings são indexadas por seus caracteres em uma contagem a partir de 0, ou seja, 'Luiz'
//                                                                                   0123
//Já os arrays são indexados pelos seus elementos também por uma contagem de 0, como por exemplo: ['José', 'Maria', 'Ana']
//                                                                                                    0       1       2
//trabalhando com strings dentro de 1 array:

const lista1 =['Miguel','João','Eduarda']

console.log(lista1)

//Se caso quisermos descobrir o tamanho do nosso array utilizamos o parâmetro .lenght

console.log(lista1.length)

//Se quisermos adicionarmos um novo elemento por fora do array nós automaticamente estamos adicionando um novo indice para ele
//como neste exemplo:

lista1[lista1.length] = 'miguel'
lista1[lista1.length] = 'João'
lista1[lista1.length] = 'Eduarda'

console.log(lista1);
console.log(lista1.length)