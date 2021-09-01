import $ from "jquery";
import Livro from "./modelo/livro";

const livro1 = new Livro('Torre Negra 1', 39.99, 0.10)
// console.log(livro1.precoComDesconto());


$('body').append(
  `<h1>Livro: ${livro1.nome}</h1>
  <h2>Preço: R$${livro1.precoComDesconto()}</h2>`
)