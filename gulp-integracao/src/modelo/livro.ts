import Vendavel from "./vendavel";

export default class Livro implements Vendavel {
  constructor(
    public nome: string,
    public readonly preco: number,
    public readonly desconto: number
  ){}

  precoComDesconto() {
    return Number( (this.preco * (1 - this.desconto)).toFixed(2) )
  }
}