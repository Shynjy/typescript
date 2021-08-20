"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('David'));
console.log(echo(30));
console.log(echo({ bola: 'redonda' }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('David'));
console.log(echoMelhorado(30)); //Aplicado de forma manual o tipo que será distribuido
console.log(echoMelhorado({ bola: 'redonda' }));
