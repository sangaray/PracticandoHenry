"use strict";
// TIPOS DE DATOS
// TS nos va a exigir que asignemos a la variables un tipo de dato específico.
// TS nos dice en qué quedamos era un número o un string, va a esperar que los tipos de datos se mantengan a través de la vida del proyecto
// TS no marcó nada al declarar e inicializar las variables ya quelas infiere de la asignación del valor.
// También puedo explicitar o definir el tipo de dato, siempre el tipo de dato va con minúsculas, no confundir con los propotipos u objetos que van con mayúsculas.
// Una vez asignado el tipo de datos ya no hay forma de inferirlo para TS.
// Para indicar el tipo de dato array debo poner primero el tipo de datos y luego [], por ejemplo number[]. También revisa los argumentos que envío en una función o método
const nombre = "Jorge";
const apellido = "Vega";
const edad = 32;
const alive = true;
const numPares = [2, 4, 6, 8, 10];
const numeros = [];
numeros.push(10);
console.log(numeros);
numeros.push(5);
console.log(numeros);
numeros.push(0);
console.log(numeros);
console.log(nombre.toUpperCase());
