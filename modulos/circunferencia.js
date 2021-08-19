"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaCircunferencia = void 0;
const PI = 3.1416;
function areaCircunferencia(raio) {
    return Number((PI * Math.pow(raio, 2)).toFixed(2));
}
exports.areaCircunferencia = areaCircunferencia;
