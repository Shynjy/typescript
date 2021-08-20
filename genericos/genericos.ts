function echo(objeto: any) {
  return objeto
}

console.log(echo('David'));
console.log(echo(30));
console.log(echo({bola: 'redonda'}));


// Usando Generics
function echoMelhorado<T>(objeto: T): T { //O tipo passado dentro do <> é cascateado para os demais
  return objeto
}

console.log(echoMelhorado('David'));
console.log(echoMelhorado<number>(30)); //Aplicado de forma manual o tipo que será distribuido
console.log(echoMelhorado({bola: 'redonda'}));