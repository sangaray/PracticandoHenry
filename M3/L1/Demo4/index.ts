// TIPOS DE DATOS
// TS nos va a exigir que asignemos a la variables un tipo de dato específico.
// TS nos dice en qué quedamos era un número o un string, va a esperar que los tipos de datos se mantengan a través de la vida del proyecto
// TS no marcó nada al declarar e inicializar las variables ya quelas infiere de la asignación del valor.
// También puedo explicitar o definir el tipo de dato, siempre el tipo de dato va con minúsculas, no confundir con los propotipos u objetos que van con mayúsculas.
// Una vez asignado el tipo de datos ya no hay forma de inferirlo para TS.
// Para indicar el tipo de dato array debo poner primero el tipo de datos y luego [], por ejemplo number[]. También revisa los argumentos que envío en una función o método

const nombre: string = "Jorge";
const apellido: string = "Vega";
const edad: number = 32;
const alive: boolean = true;
const numPares: number[] = [2, 4, 6, 8, 10];
const palabras: string[] = ["Hola", "Chau", "Jorge"];
const numeros: number[] = [];

numeros.push(10);
console.log(numeros);
numeros.push(5);
console.log(numeros);
numeros.push(0);
console.log(numeros);

console.log(nombre.toUpperCase());

// Ahora lo que no quiero ver jamás en ninuno de nuestros proyectos. Esta va a ser nuestra última opción en todos los cados, y posiblemente ni aún así. No es una buena práctica para nada, porque tiramos por la borda la caracteristica del tipado  que nos da TS
// Poner siempre el tipo, no inferir nada.
// Puedo indicar que tipo de dato va a recibir como parámetro y que tipo de dato va a devolver una función

let unaVariable: any = "Hola";
unaVariable = 5;
unaVariable = true;

const sumarNumeros = (arr: []) => {
  let suma = 0;
  for (const num of arr) suma += num;
  return suma;
};
