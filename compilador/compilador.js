"use strict";
(function () {
    let canal = "NerdCast";
    // let inscritos: number = 610234;
    // canal = inscritos;
    console.log(canal);
    function saudar(isManha, horas) {
        let a = horas;
        let saudacao;
        if (isManha) {
            saudacao = `Bom dia são ${a}hr(s)`;
        }
        else {
            saudacao = "Tenha um bom dia!";
        }
        return saudacao;
    }
    console.log(saudar(true, 8));
})();
