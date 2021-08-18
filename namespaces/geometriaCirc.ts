namespace Areas {
  export const PI = 3.1416;

  export function circunferencia(raio: number): number {
    return Number((PI * Math.pow(raio, 2)).toFixed(2));
  }
}