"use strict";
// Namespace --> cria um escopo unico, podendo ser transportado para o seu exterior.
// namespace Areas {
//   export const PI = 3.1416;
//   export function circunferencia(raio: number): number {
//     return Number((PI * Math.pow(raio, 2)).toFixed(2));
//   }
//   export function retangulo(base: number, altura: number): number {
//     return base * altura;
//   }
// }
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>
// const PI = 4;
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(5, 28));
// console.log(PI); // escopo fora do namespace
console.log(Areas.PI); // escopo do namespace
