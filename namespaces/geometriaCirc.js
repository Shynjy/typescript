"use strict";
var Areas;
(function (Areas) {
    Areas.PI = 3.1416;
    function circunferencia(raio) {
        return Number((Areas.PI * Math.pow(raio, 2)).toFixed(2));
    }
    Areas.circunferencia = circunferencia;
})(Areas || (Areas = {}));
