"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("David"));
console.log(echo(30));
console.log(echo({ bola: "redonda" }));
// Usando Generics
function echoMelhorado(objeto) {
    //O tipo passado dentro do <> é cascateado para os demais
    return objeto;
}
console.log(echoMelhorado("David"));
console.log(echoMelhorado(30)); //Aplicado de forma manual o tipo que será distribuido
console.log(echoMelhorado({ bola: "redonda" }));
// Generics disponíveis na API
// const avaliacoes: number[] = [10, 9.3, 7.7]
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push(('5.5')) //Erro
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach((elemento) => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([4, 5, 6]);
imprimir(["Ana", "David", "Pereira"]);
imprimir([
    {
        nome: "David",
        idade: 33,
    },
]);
imprimir([
    {
        nome: "Sônia",
        idade: 32,
    },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho("Alguma coisa legal"));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 7).executar());
// console.log(new OperacaoBinaria('Boa ', 'tarde').executar()); // Erro
// console.log(new OperacaoBinaria(100, '%').executar()); // Erro
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s).`;
    }
}
const d1 = new Data(23, 8, 2021);
const d2 = new Data(9, 5, 1988);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Desafio
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(valor) {
        this.fila.push(valor);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila1 = new Fila("Ana", "Carlos", "Sônia");
fila1.imprimir();
fila1.entrar("David");
fila1.imprimir();
console.log(fila1.proximo());
console.log(fila1.proximo());
fila1.imprimir();
