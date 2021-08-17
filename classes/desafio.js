"use strict";
(() => {
    // Exercício 1 - Classe
    // function Moto(nome) {
    //   this.nome = nome
    //   this.velocidade = 0
    //   this.buzinar = function() {
    //       console.log('Toooooooooot!')
    //   }
    //   this.acelerar= function(delta) {
    //       this.velocidade = this.velocidade + delta
    //   }
    // }
    // var moto = new Moto('Ducati')
    // moto.buzinar()
    // console.log(moto.velocidade)
    // moto.acelerar(30)
    // console.log(moto.velocidade)
    class Moto {
        constructor(nome) {
            this.nome = nome;
            this.velocidade = 0;
        }
        buzinar() {
            console.log("Biiiiiiiiiiii!");
        }
        acelerar(delta) {
            this.velocidade += delta;
        }
    }
    const moto1 = new Moto("Miragem 150");
    moto1.buzinar();
    console.log(moto1.velocidade);
    moto1.acelerar(30);
    console.log(moto1.velocidade);
    // Exercício 2 - Herança
    // var objeto2D = {
    //   base: 0,
    //   altura: 0
    // }
    // var retangulo = Object.create(objeto2D)
    // retangulo.base = 5
    // retangulo.altura = 7
    // retangulo.area = function() {
    //   return this.base * this.altura
    // }
    // console.log(retangulo.area())
    class Objeto2D {
        constructor() {
            this.base = 0;
            this.altura = 0;
        }
    }
    class Retangulo extends Objeto2D {
        area() {
            return this.base * this.altura;
        }
    }
    const retangulo = new Retangulo();
    retangulo.base = 5;
    retangulo.altura = 28;
    console.log(retangulo.area());
    // Exercício 3 - Getters & Setters
    // var estagiario = {
    //   _primeiroNome: ''
    // }
    // Object.defineProperty(estagiario, 'primeiroNome', {
    //   get: function () {
    //       return this._primeiroNome
    //   },
    //   set: function (valor) {
    //       if (valor.length >= 3) {
    //           this._primeiroNome = valor
    //       } else {
    //           this._primeiroNome = ''
    //       }
    //   },
    //   enumerable: true,
    //   configurable: true
    // })
    // console.log(estagiario.primeiroNome)
    // estagiario.primeiroNome = 'Le'
    // console.log(estagiario.primeiroNome)
    // estagiario.primeiroNome = 'Leonardo'
    // console.log(estagiario.primeiroNome)
    class Estagiario {
        constructor() {
            this._primeiroNome = "";
        }
        get primeiroNome() {
            return this._primeiroNome;
        }
        set primeiroNome(valor) {
            if (valor.length >= 3) {
                this._primeiroNome = valor;
            }
            else {
                this._primeiroNome = "";
            }
        }
    }
    const estagiario = new Estagiario();
    console.log(estagiario.primeiroNome);
    estagiario.primeiroNome = "Da";
    console.log(estagiario.primeiroNome);
    estagiario.primeiroNome = "David";
    console.log(estagiario.primeiroNome);
    // Final
})();
