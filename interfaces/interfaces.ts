
interface Humano {
  nome: string
  idade?: number //? torna esse atributo opcional
  [prop: string]: any // não sei que vai vir aqui
  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
  console.log(`Olá, ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Sônia'
}

const pessoa: Humano = {
  nome: 'David',
  idade: 33,
  saudar(sobrenome: string) {
    console.log(`Hi my name is ${this.nome} ${sobrenome}`);
    
  }
}

saudarComOla(pessoa);
mudarNome(pessoa)
saudarComOla(pessoa);
// saudarComOla({nome: 'Ana'});

pessoa.saudar('Lima')

// Usando Classes....
class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date
  saudar(sobrenome: string) {
    console.log(`Hello, my name is ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra);


// Interface Funcão
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
  // 3 formas de fazer um potencia
  
  // return base ** exp
  // return Math.pow(base, exp)
  return Array(exp).fill(base).reduce((a, v) => a * v)
}

console.log(potencia(8, 2));

// Herança
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void
}


const x = 2
const y = 3
const z = 4

interface Object {
  log(): void
}

Object.prototype.log = function() {
  console.log(this.toString());
  
}

console.log(x);
console.log(y);
console.log(z);

x.log()
y.log()
z.log()

const cli = {
  nome: 'David',
  toString() {
    return this.nome
  }
}

cli.log()
