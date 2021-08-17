(function () {

  class Data {
    // Público por padrão
    public dia: number;
    mes: number;
    ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
    }
  }

  const aniDavid = new Data(9, 5, 1988);
  console.log(aniDavid);
  const dataPadrao = new Data(); // Posso omitir os "()"
  console.log(dataPadrao);

  class DataExpress {
    constructor(
      public dia: number = 12,
      public mes: number = 6,
      public ano: number = 1989
    ) {}
  }

  const aniSonia = new DataExpress();
  console.log(aniSonia);

  // Desafio 1
  class Produto {
    constructor(
      public nome: string,
      public preco: number,
      public desconto: number = 0
    ) {}

    public precoComDesconto(): number {
      // return +(this.preco - (this.preco * this.desconto)).toFixed(2) //Forma Burra
      return +(this.preco * (1 - this.desconto)).toFixed(2); //Forma inteligente
    }

    public resumo(): string {
      return `${this.nome} custa R$${this.precoComDesconto()} (${
        this.desconto * 100
      }% off)`;
    }
  }

  const banana = new Produto("Banana", 1.99, 0.2);
  console.log(banana.resumo());

  const bread = new Produto("Pão", 0.5);
  bread.desconto = 0.1;
  console.log(bread.resumo());

  class Carro {
    private velocidadeAtual: number = 0;

    constructor(
      public marca: string,
      public modelo: string,
      private velocidadeMaxima: number = 200
    ) {}

    protected alterarVelocidade(delta: number): number {
      const novaVelocidade = this.velocidadeAtual + delta;
      const velocidadeValida =
        novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

      if (velocidadeValida) {
        this.velocidadeAtual = novaVelocidade;
      } else {
        this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0;
      }
      return this.velocidadeAtual;
    }

    public acelerar(): number {
      return this.alterarVelocidade(5);
    }

    public frear(): number {
      return this.alterarVelocidade(-5);
    }
  }

  const carro1 = new Carro('Ford', 'Ka', 185)

  Array(25).fill(0).forEach(()=> carro1.acelerar())
  console.log(carro1.acelerar());
  
  Array(5).fill(0).forEach(()=> carro1.frear())
  console.log(carro1.frear());

  class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
      super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
      return this.alterarVelocidade(20);
    }

    public frear(): number {
      return this.alterarVelocidade(-15);
    }
  }

  const f40 = new Ferrari('F40', 324)
  console.log(`${f40.marca} ${f40.modelo}`)
  console.log(f40.acelerar())
  console.log(f40.frear())
  
  // Getters & Setters
  class Pessoa {
    private _idade: number = 0;


    get idade(): number {
      return this._idade
    }

    set idade(valor: number) {
      if(valor >= 0 && valor <= 120) {
        this._idade = valor
      }
    }

   }

   const pessoa1 = new Pessoa
   pessoa1.idade = 10

   console.log(pessoa1.idade);
   
   // Atributos e métodos estáticos
   class Matematica {
     static PI: number = 3.1416;

     static areaCirc(raio: number): number {
       return Matematica.PI * (raio * raio)
     }
   }

  //  console.log(new Matematica().areaCirc(5)); // Sem static
   console.log(+Matematica.areaCirc(8).toFixed(2)); // Com static
   

// Classe abstrata
abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a)
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a)
  }
}

let c1 = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado());

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado());


// Singleton
class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance(): Unico {
    return  Unico.instance
  }

  agora() {
    return new Date();
  }
}

console.log(Unico.getInstance().agora());

// Atributos apenas leitura
class Aviao {
  // readonly serve para sinalizar que esse atributo só é para leitura
  readonly modelo: string

  constructor(
    modelo: string,
    readonly prefixo: string
  ){
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8';
// turboHelice.prefixo = 'PT-DEF';

console.log(turboHelice);

// Fim do escopo
})();
