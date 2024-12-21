// TYPESCRIPT ii
// Dentro de una función debemos establecer que los parámetros y retorno tengan un tipo de dato
// Dejamos pendientes también los objetos, ya que se complican más
// Interfaces y tipos personalizados, vamos a tener la posibilidad de estabecer tipos propios, para establecer tipos en un objeto vamos ausar interfaces
// Para establecer tipos en una variable vamos a usar dos puntos y el tipo de dato correspondiente
// Puedo establecer un tipo de dato para el retorno también, poniendoel tipo de dato delante de la flecha
// De esta forma TS está atento a cualquier error que pueda suceder y me va a avisar
// Podemos establecer un tipo de dato tanto para los parámetros como para el retorno de una función

const nomhre: string = "Jorge";

const saludar = (name: string): string => {
  return `Hola ${name}`;
};

console.log(saludar(nomhre));
saludar("Pedro");
saludar("Maria");

// saludar(10) // Error

const calcularTotal = (quantity: number, price: number): number => {
  return quantity * price;
};

calcularTotal(10, 10);
//calcularTotal(10, "Holis")  // Error
