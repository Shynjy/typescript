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


// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: false
}

// @perfilAdmin
class MudancaAdministrativa {
  critico() {
      console.log('Algo crítico foi alterado!')
  }
}

function perfilAdmin<T extends Construtor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args)
      if(!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Sem permissão!');
      }
    }
  }
}

new MudancaAdministrativa().critico()

class ContaCorrente {
  @naoNegativo
  private saldo: number

  constructor(saldo: number) {
    this.saldo = saldo
  }

  @congelar
  sacar(@paramInfo valor: number) {
    if(valor <= this.saldo) {
      this.saldo -= valor
      return true
    } else {
      return false
    }
  }

  @congelar
  getSaldo() {
    return this.saldo
  }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());

// cc.getSaldo = function() {
//   return this['saldo'] + 7000
// }

console.log(cc.getSaldo());

// Decorator de Médodo
// Objeto.freeze() --> congela o método
function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
  console.log(alvo);
  console.log(nomePropriedade);
  descritor.writable = false;  
}


// Decorator de atributo
function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade]
  Object.defineProperty(alvo, nomePropriedade, {
    get: function(): any {
      return alvo["_" + nomePropriedade]
    },
    set: function(valor: any): void {
      if(valor <= 0 ) {
        throw new Error('Valor Inválido')
      } else {
        alvo["_" + nomePropriedade] = valor
      }
    }
  })
}

// Decorator de Parâmentro
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`Alvo: ${alvo}`);
  console.log(`Método: ${nomeMetodo}`);
  console.log(`Índice do Parametro: ${indiceParam}`);  
}