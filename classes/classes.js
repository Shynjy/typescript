"use strict";
(function () {
    class Data {
        constructor(dia = 1, mes = 1, ano = 1970) {
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
        constructor(dia = 12, mes = 6, ano = 1989) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
    }
    const aniSonia = new DataExpress();
    console.log(aniSonia);
    // Desafio 1
    class Produto {
        constructor(nome, preco, desconto = 0) {
            this.nome = nome;
            this.preco = preco;
            this.desconto = desconto;
        }
        precoComDesconto() {
            // return +(this.preco - (this.preco * this.desconto)).toFixed(2) //Forma Burra
            return +(this.preco * (1 - this.desconto)).toFixed(2); //Forma inteligente
        }
        resumo() {
            return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
        }
    }
    const banana = new Produto("Banana", 1.99, 0.2);
    console.log(banana.resumo());
    const bread = new Produto("Pão", 0.5);
    bread.desconto = 0.1;
    console.log(bread.resumo());
    class Carro {
        constructor(marca, modelo, velocidadeMaxima = 200) {
            this.marca = marca;
            this.modelo = modelo;
            this.velocidadeMaxima = velocidadeMaxima;
            this.velocidadeAtual = 0;
        }
        alterarVelocidade(delta) {
            const novaVelocidade = this.velocidadeAtual + delta;
            const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
            if (velocidadeValida) {
                this.velocidadeAtual = novaVelocidade;
            }
            else {
                this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0;
            }
            return this.velocidadeAtual;
        }
        acelerar() {
            return this.alterarVelocidade(5);
        }
        frear() {
            return this.alterarVelocidade(-5);
        }
    }
    const carro1 = new Carro('Ford', 'Ka', 185);
    Array(25).fill(0).forEach(() => carro1.acelerar());
    console.log(carro1.acelerar());
    Array(5).fill(0).forEach(() => carro1.frear());
    console.log(carro1.frear());
    class Ferrari extends Carro {
        constructor(modelo, velocidadeMaxima) {
            super('Ferrari', modelo, velocidadeMaxima);
        }
        acelerar() {
            return this.alterarVelocidade(20);
        }
        frear() {
            return this.alterarVelocidade(-15);
        }
    }
    const f40 = new Ferrari('F40', 324);
    console.log(`${f40.marca} ${f40.modelo}`);
    console.log(f40.acelerar());
    console.log(f40.frear());
    // Getters & Setters
    class Pessoa {
        constructor() {
            this._idade = 0;
        }
        get idade() {
            return this._idade;
        }
        set idade(valor) {
            if (valor >= 0 && valor <= 120) {
                this._idade = valor;
            }
        }
    }
    const pessoa1 = new Pessoa;
    pessoa1.idade = 10;
    console.log(pessoa1.idade);
    // Atributos e métodos estáticos
    class Matematica {
        static areaCirc(raio) {
            return this.PI * raio * raio;
        }
    }
    Matematica.PI = 3.1416;
    //  console.log(new Matematica().areaCirc(5)); // Sem static
    console.log(Matematica.areaCirc(5)); // Com static
    // Fim do escopo
})();
