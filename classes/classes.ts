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
  
  
})();
