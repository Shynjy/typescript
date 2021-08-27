function echo(objeto: any) {
  return objeto;
}

console.log(echo("David"));
console.log(echo(30));
console.log(echo({ bola: "redonda" }));

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
  //O tipo passado dentro do <> é cascateado para os demais
  return objeto;
}

console.log(echoMelhorado("David"));
console.log(echoMelhorado<number>(30)); //Aplicado de forma manual o tipo que será distribuido
console.log(echoMelhorado({ bola: "redonda" }));

// Generics disponíveis na API
// const avaliacoes: number[] = [10, 9.3, 7.7]
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push(('5.5')) //Erro
console.log(avaliacoes);

// Array

function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([4, 5, 6]);
imprimir<string>(["Ana", "David", "Pereira"]);

type Pessoa = { nome: string; idade: number };

imprimir<{ nome: string; idade: number }>([
  {
    nome: "David",
    idade: 33,
  },
]);

imprimir<Pessoa>([
  {
    nome: "Sônia",
    idade: 32,
  },
]);

// Tipo Genérico

type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>("Alguma coisa legal"));

// Class com Generics

abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(3, 7).executar());

// console.log(new OperacaoBinaria('Boa ', 'tarde').executar()); // Erro

// console.log(new OperacaoBinaria(100, '%').executar()); // Erro

class Data {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  executar(): string {
    const t1 = this.getTime(this.operando1);
    const t2 = this.getTime(this.operando2);
    const diferenca = Math.abs(t1 - t2);
    const dia = 1000 * 60 * 60 * 24;
    return `${Math.ceil(diferenca / dia)} dia(s).`;
  }
}

const d1 = new Data(23, 8, 2021);
const d2 = new Data(9, 5, 1988);

console.log(new DiferencaEntreDatas(d1, d2).executar());

// Desafio 1

class Fila<T> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(valor: T) {
    this.fila.push(valor);
  }

  proximo(): T | null {
    if (this.fila.length >= 0 && this.fila[0]) {
      const primeiro = this.fila[0];
      this.fila.splice(0, 1);
      return primeiro;
    } else {
      return null
    }
  }

  imprimir() {
    console.log(this.fila);
  }
}

const fila1 = new Fila<string>("Ana", "Carlos", "Sônia");

fila1.imprimir();
fila1.entrar("David");
fila1.imprimir();
console.log(fila1.proximo());
console.log(fila1.proximo());
fila1.imprimir();

// Desafio 2

// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()


type Par<C, V> = {
  chave: C,
  valor: V
}

class Mapa<C, V> {
  itens: Array<{chave: C, valor: V}> = new Array<Par<C,V>>()

  obter(chave: C): Par<C, V> | null {
    const callback = (i: Par<C, V>) => i.chave === chave
    const resultado = this.itens.filter(callback)
    return resultado ? resultado[0] : null
  }

  colocar(element: Par<C,V>) {
    const encontrado = this.obter(element.chave)
    if(encontrado) {
      encontrado.valor = element.valor
    } else {
      this.itens.push(element)
    }
  }

  limpar() {
    this.itens = Array<Par<C, V>>()
  }

  imprimir() {
    console.log(this.itens);
  }
}
 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
mapa.colocar({ chave: 3, valor: 'Maria' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()


let casa: number[] = [1, 2]
console.log(casa);

let casa2 = casa
casa2[0] = 3
console.log(casa2);
console.log(casa);