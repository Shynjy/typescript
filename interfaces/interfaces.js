"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Sônia';
}
const pessoa = {
    nome: 'David',
    idade: 33,
    saudar(sobrenome) {
        console.log(`Hi my name is ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Ana'});
pessoa.saudar('Lima');
// Usando Classes....
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Hello, my name is ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // 3 formas de fazer um potencia
    // return base ** exp
    // return Math.pow(base, exp)
    return Array(exp).fill(base).reduce((a, v) => a * v);
};
console.log(potencia(8, 2));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
const x = 2;
const y = 3;
const z = 4;
Object.prototype.log = function () {
    console.log(this.toString());
};
console.log(x);
console.log(y);
console.log(z);
x.log();
y.log();
z.log();
const cli = {
    nome: 'David',
    toString() {
        return this.nome;
    }
};
cli.log();
