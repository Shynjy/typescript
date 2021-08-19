const PI = 3.1416

export function areaCircunferencia(raio: number): number {
  return Number((PI * Math.pow(raio, 2)).toFixed(2));
}