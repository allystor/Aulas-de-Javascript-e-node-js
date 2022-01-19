/*Sobre objetos:
No javascript,um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara,
por exemplo. Uma xícara é um objeto, com propriedades. Da mesma forma, objetos em JavaScript podem 
ter propriedades, que definem suas características.

exemplo de objeto:

*/
/* Criando um objeto

const pessoa1 = {
    nome:'Álvaro',
    sobrenome:'Veiga',
    idade:25
};
const pessoa2 = {
    nome:'Maria',
    sobrenome:'Joaquina',
    idade:45
};
console.log(pessoa1.nome)
console.log(pessoa2.nome)

*/
/*Criando um objeto de exemplo para uma interação da máquina com o usuário*/

const pessoa= {
    nome: 'João',
    sobrenome:'Almeida',
    idade: 25,
    /*Criando método */
    resposta() {
        console.log(`Olá ${this.nome} ${this.sobrenome}, seja bem-vindo`)
        console.log(`vejo que você tem ${this.idade} anos!`)
    }
};
pessoa.resposta();