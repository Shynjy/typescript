"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniDavid = new Data(9, 5, 1988);
console.log(aniDavid);
const dataPadrao = new Data; // POsso omitir os "()"
console.log(dataPadrao);
