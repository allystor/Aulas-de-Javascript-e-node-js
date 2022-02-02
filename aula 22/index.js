/*
Sobre estruturas de condição:

Estruturas de condicao é a estrutura de condição a ser verificada para decidir se as linhas do bloco de código 
serão executadas ou não. Caso a condição seja falsa, o bloco de código 1 não deve ser executado, mas o bloco de 
código 2 sim. Não existe limite para o número de condições declaradas com a estrutura else if (condicao n). Com
isso sempre que criamos interações com 'if','else if' e else estamos criando uma esturtura de condição elas podem
ser estruturadas da seguinte maneira.

Suponhamos que:

*/
//determinando uma varável
const hora = 19;

//criando uma primeira base condicional
if(hora <= 12){
    console.log('Bom dia programador')
}
//criando uma segunda base condicional
else if (hora >= 12) {
    console.log('Boa tarde programador')
}
//criando uma terceira base condicional
else if (hora >= 18) {
    console.log('Boa noite programador')
};
/*

As estruturas de sempre seguem o parâmetro para que haja uma interação para que as mesmas sejam executadas. 
Seguindo a idéia do exemplo a cima, se(if) a variável(hora) for (hora < 12) ela executará uma determinada ação
que no caso é o retorno do console.log('Bom dia programador') se não(else if) executará uma outra ação definida
por quem desenvolveu a estrutura.

*/