"use strict";
// String
let nome = "David";
// Após colocado a string é inferido o tipo string implicitamente
console.log(nome);
// Numbers
let idade = 33;
idade = 25.5;
console.log(idade);
// Boolean
let possuiHobbies = false;
// possuiHobbies = 1; 
// mesmo com erro ainda assim vai alterar o valor, poré é possível alterar isso nas configurações.
console.log(possuiHobbies);
// Tipos Explícitos
let minhaIdade;
minhaIdade = 27;
console.log(minhaIdade);
// OBS: toda variável criada nem inicialização sem um tipo se torna do tipo any.
// Array
let hobbies = ['desenhar', 'jogar', 'comer'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// Tuplas
let endereco = ["address", 99];
console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Amarelo"] = 5] = "Amarelo";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Amarelo);
// Any
let Carro = "BMW";
console.log(Carro);
Carro = { marca: "BMW", ano: 2019 };
console.log(Carro);
// funções
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return Math.round(numA * numB);
}
console.log(multiplicar(4.7, 9));
// Tipo função
let calculo;
calculo = multiplicar;
console.log(multiplicar(5, 6));
// Objetos
let usuario = {
    nome: "João",
    idade: 27
};
console.log(usuario);
usuario = {
    idade: 30,
    nome: "Maria"
};
console.log(usuario);
// Desafio I
let funcionario = {
    supervirores: ['Maria', 'David', 'Ana'],
    baterPonto(horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(funcionario.supervirores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervirores: ['Mateus', 'Carlos', 'José'],
    baterPonto(horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(funcionario2.supervirores);
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
// Null só pode ser opcional
// Atribuir null a uma variável a torna seu tipo any
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '987654321',
    tel2: null
};
console.log(contato1);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
