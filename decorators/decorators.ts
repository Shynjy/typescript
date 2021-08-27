function logarClasse(construtor: Function) {
  console.log(construtor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio
}

function decorator(a: string, b: number) {
  return function (_: Function): void {
    console.log(a + ' ' + b);
  }
}

type Construtor = { new(...args: any[]): {} }

function logarObjeto(constructor: Construtor) {
  console.log('Carregado...');
  
  return class extends constructor {
    constructor(...args: any[]) {
      console.log('Antes...')

      super(...args)
      
      console.log('Depois...')
    }
  }
}

interface Eletrodomestico {
  imprimir?(): void
}

// @logarClasse
// @logarClasseSe(true)
// @decorator('teste', 1234)
// @logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log(`novo...`);
  }
}

function imprimivel(constructor: Function) {
  constructor.prototype.imprimir = function() {
    console.log(this);
  }
}

// (<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()
