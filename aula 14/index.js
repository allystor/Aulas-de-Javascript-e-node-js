//Sobre arrays

//Em javascript arrays podem ser descrito como listas ou uma seleção de coleção de strings e números podendo ser manipulados
//dentro de um array de maneira simples.

//strings são indexadas por seus caracteres em uma contagem a partir de 0, ou seja, 'Luiz'.
//                                                                                   0123
//já os arrays são indexados pelos seus elementos também por uma contagem de 0, como por exemplo: ['José', 'Maria', 'Ana'].
//                                                                                                    0       1       2
//trabalhando com strings dentro de 1 array:

const lista1 =['Miguel','João','Eduarda'];

console.log(lista1);

//Se caso quisermos descobrir o tamanho do nosso array utilizamos o parâmetro .lenght

console.log(lista1.length);

//Se quisermos adicionarmos um novo elemento por fora do array nós automaticamente estamos adicionando um novo indice para ele
//Como neste exemplo:

lista1[lista1.length] = 'miguel';
lista1[lista1.length] = 'João';
lista1[lista1.length] = 'Eduarda';

console.log(lista1);
console.log(lista1.length);

//Podemos realizar a mesma operação de maneira mais simples também com o parâmetro .push porém adcionando no fim
//Exemplo:

lista1.push('Olavo')

console.log(lista1)
console.log(lista1.length)

//Para podermos adicionar um elemento no inicio da lista utilizamos o parâmetro .unshift mas iremos trocar o elemento que estava
//antes de substimuirmos para uma casa a frente

//simplificando teriamos algo do tipo L = ['lucas', 'Mariana']
//                                           0        1
//com o .unshift adcionariamos um novo elemento chamado 'Alan' que seria o indice 0 e o lucas se tornaria o indice 1
//o que resultaria da seguinte forma ['Alan', 'Lucas','mariana']
//                                      0        1       2

//logo:

lista1.unshift('fábio')

console.log(lista1)

//Similarmente nós podemos realizar a remoção de elementos do array com o parâmentro .pop só que removendo os elementos pelo final

//exemplificando:

lista1.pop()
console.log(lista1)