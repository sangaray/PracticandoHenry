// Spread Operator (Video 7)
// Nos facilita ciertastareas que llevarían más código sin este operador
// Si quiero crear una copia de este objeto, cuando igualo dos objetos, lo que hago es referenciar el nuevo objeto al mismo lugar donde se encuentra el primero, porque la copia es por referencia, en realidad es el mismo, no se hace una copia independiente o distinta. Para crear una copia tengo que usar el spread operator.
// Este aplica tanto a objetos como a arrays
// Se puede usar también para cambiar propiedades

const perro = {
	raza: "Salchicha",
	nombre1: "Pancho",
	edad1: 3,
	color: "marrón",
};

perro.collar = true;
console.log(perro);

perro2 = { ...perro, collar: false };
console.log(perro2);
console.log(perro);

const miArreglo = [true, "palabra", { a: 5 }];

miArreglo.push("Nuevo elemento");
console.log(miArreglo);
const miArreglo2 = [...miArreglo, "otro elemento"];
console.log(miArreglo2);
console.log(miArreglo);

// Para concatenar arreglos
const miArreglo3 = [4, 8, 89, 1];
const miArreglo4 = [45, 78, 12, 3];
const miArreglo5 = [...miArreglo3, ...miArreglo4];
console.log(miArreglo5);

// Ejemplo Teoría de Henry

const persona = {
	nombre: "Severus",
	apellido: "Snape",
	casa: "Slytherin",
};

console.log(persona);

persona.position = ["Teacher", "Potion Master", "Double Agent"];

console.log(persona);

const persona1 = { ...persona, edad: 38 };

console.log(persona);

console.log(persona1);

// Tema 11
// Rest operator
function sumar(...numeros) {
	let suma = 0;
	for (let i = 0; i < numeros.length; i++) suma += numeros[i];
	return suma;
}

console.log(sumar(3, 10, 5, 38));
