class Data {
  // Público por padrão
  public dia: number
  mes: number
  ano: number

  constructor(
    dia: number = 1, 
    mes: number = 1, 
    ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniDavid = new Data(9, 5, 1988)
console.log(aniDavid)
const dataPadrao = new Data // POsso omitir os "()"
console.log(dataPadrao)