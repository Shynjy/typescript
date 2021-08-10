// Let & Const
let seraQuePode = '?';
console.log(seraQuePode);
// var seraQuePode = '?'; /* hoisting ERRO ocorre apenas com var */
// let seraQuePode = '?'; /* sem hoisting ERRO ocorre */

let estaFrio = true;

if(estaFrio) {
  // var acao = 'Colocar o casaco!'; /* Passa para fora da condicional */
  let acao = 'Colocar o casaco!';    /* Não passa o bloco gera erro */
}

// console.log(acao);

var segredo = 'externo';

function revelar() {
  var segredo = 'interno'; /* o var tem escopo de função */
  console.log(segredo);
}
revelar(); /* utiliza o valor interno */
console.log(segredo);

// Arrow function
// Função normal
const somar = function(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;

console.log(subtrair(2, 3));

const saudacao = () => console.log("Olá");
saudacao();

const falarCom = (pessoa: string) => console.log("Ola " + pessoa + "!");
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
function contagemRegressiva(inicio: number = 3): void {
  console.log(inicio);

  while(inicio > 0) {
    inicio--;
    console.log(inicio);
  }
  console.log('Fim!');
}

// contagemRegressiva();
// contagemRegressiva(5);

// Operador Spread & Rest
const numbers: number[] = [1, 10, 99, -5]

console.log(Math.max(...numbers));

const turmaA: string[] = ["Ana", "Maria", "Ilma"];
const turmaB: string[] = ["Arthur", "David", "Pereira", ...turmaA];

console.log(turmaB);


function retornaArray(...args: number[]): number[] {
  return args;
}

const numeros = retornaArray(3, 5, 30, 20, 2);

console.log(numeros);
console.log(retornaArray(...numbers));

// Operador Spread & Rest (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]): void {
  // console.log(Array.isArray(params));
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla);