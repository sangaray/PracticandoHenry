export {};

// trabajando con variables
let a: number = 2;

a = 4;

console.log(a);

// trabajando con funciones
const addition = (a: number, b: number): number => a + b;

console.log(addition(2, 3));

// trabajando con interfaces
export interface Product {
  title: string;
  description: string;
  price: number;
  images: Array<string>;
  active: boolean;
}

const arregloGenerico: Array<number> = [1, 2, 3, 4];
const arregloConvencional: number[] = [5, 6, 7, 8];

console.log(arregloGenerico);
console.log(arregloConvencional);
