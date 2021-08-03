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