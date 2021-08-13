"use strict";
(function () {
    // Let & Const
    let seraQuePode = "?";
    console.log(seraQuePode);
    // var seraQuePode = '?'; /* hoisting ERRO ocorre apenas com var */
    // let seraQuePode = '?'; /* sem hoisting ERRO ocorre */
    let estaFrio = true;
    if (estaFrio) {
        // var acao = 'Colocar o casaco!'; /* Passa para fora da condicional */
        // let acao = "Colocar o casaco!"; /* Não passa o bloco gera erro */
    }
    // console.log(acao);
    var segredo = "externo";
    function revelar() {
        var segredo = "interno"; /* o var tem escopo de função */
        console.log(segredo);
    }
    revelar(); /* utiliza o valor interno */
    console.log(segredo);
    // Arrow function
    // Função normal
    const somar = function (n1, n2) {
        return n1 + n2;
    };
    console.log(somar(2, 2));
    const subtrair = (n1, n2) => n1 - n2;
    console.log(subtrair(2, 3));
    const saudacao = () => console.log("Olá");
    saudacao();
    const falarCom = (pessoa) => console.log("Ola " + pessoa + "!");
    falarCom("André");
    // This
    // function normalComThis() {
    //   console.log(this);
    // }
    // normalComThis();
    // const normalComThisEspecial = normalComThis.bind({nome: 'David'});
    // normalComThisEspecial();
    // No arrow function o this nunca muda, conforme o seu contexto, ele se mantem ao contexto original do seu escopo.
    // const arrowComThis = () => console.log(this)
    // arrowComThis()
    // Parâmetro padrão
    function contagemRegressiva(inicio = 3) {
        console.log(inicio);
        while (inicio > 0) {
            inicio--;
            console.log(inicio);
        }
        console.log("Fim!");
    }
    contagemRegressiva();
    contagemRegressiva(5);
    // Operador Spread & Rest
    const numbers = [1, 10, 99, -5];
    console.log(Math.max(...numbers));
    const turmaA = ["Ana", "Maria", "Ilma"];
    const turmaB = ["Arthur", "David", "Pereira", ...turmaA];
    console.log(turmaB);
    function retornaArray(...args) {
        return args;
    }
    const numeros = retornaArray(3, 5, 30, 20, 2);
    console.log(numeros);
    console.log(retornaArray(...numbers));
    // Operador Spread & Rest (Tupla)
    const tupla = [1, "abc", false];
    function tuplaParam1(a, b, c) {
        console.log(`1) ${a} ${b} ${c}`);
    }
    tuplaParam1(...tupla);
    function tuplaParam2(...params) {
        // console.log(Array.isArray(params));
        console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
    }
    tuplaParam2(...tupla);
    // Destructuring (array)
    const caracteristicas = ["Motor Zetec 1.8", 2020];
    const [motor, ano] = caracteristicas;
    console.log(motor);
    console.log(ano);
    // Destructuring (object)
    const item = {
        nome: "SSD 480GB",
        preco: 200,
    };
    const { preco, nome: n } = item;
    console.log(n);
    console.log(preco);
    // Desafios
    // 1
    const dobro = (valor) => valor * 2;
    console.log("Resp: Desafio 1");
    console.log(dobro(10));
    // 2
    function dizerOla(nome = "Pessoa") {
        console.log("Ola, " + nome);
    }
    console.log("Resp: Desafio 2");
    dizerOla();
    dizerOla("Anna");
    // 3
    const nums = [-3, 33, 38, 5];
    console.log("Resp: Desafio 3");
    console.log(Math.min(...nums));
    // 4
    const array = [55, 20];
    array.push(...nums);
    console.log("Resp: Desafio 4");
    console.log(array);
    // 5
    const notas = [8.5, 6.3, 9.4];
    const [nota1, nota2, nota3] = notas;
    const cientista = { primeiroNome: "Will", experiencia: 12 };
    const { experiencia, primeiroNome } = cientista;
    console.log("Resp: Desafio 5");
    console.log(primeiroNome, experiencia);
    console.log(nota1, nota2, nota3);
    // Callback
    function esperar3() {
        setTimeout(() => {
            // console.log('3s depois...');
            return "3s depois...";
        }, 3000);
    }
    const resultado = esperar3();
    console.log(resultado); // undefined
    function esperar4(callback) {
        setTimeout(() => {
            callback("4s depois...");
        }, 4000);
    }
    const callback = function (resultado) {
        console.log(resultado);
    };
    esperar4(callback);
    // Promise
    function esperar3Promise() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("3s depois promise...");
            }, 3000);
        });
    }
    esperar3Promise().then((valor) => console.log(valor));
    fetch("https://swapi.dev/api/people/1")
        .then((resp) => resp.json())
        .then((perso) => perso["films"])
        .then((film) => fetch(film[0]))
        .then((title) => title.json())
        .then((resp) => console.log(resp.title));
})();
