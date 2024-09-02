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

// Rest operator (Video 8)
// Si quiero sumar diferentes cantidades de números, en una función sumar estándar deberíamos cambiar la cantidad de parámetros y variables para reflejar los distintos casos
// Este operador me permite indicar que la cantidad de parámetros son indeterminados y los va a recibir todos y guardarlos  en una variable
function sumar1(a, b, c) {
	const suma1 = a + b + c;
	return suma1;
}

console.log(sumar1(5, 9, 3));
console.log(sumar1(5, 9));
console.log(sumar1(5, 9, 3, 8, 4, 6));

function sumar2(...valores) {
	console.log(valores);
	let suma2 = 0;
	for (let i = 0; i < valores.length; i++) {
		suma2 += valores[i];
	}
	return suma2;
}

console.log(sumar2(5, 9, 3));
console.log(sumar2(5, 9));
console.log(sumar2(5, 9, 3, 8, 4, 6));

// Ejemplo Teoría Henry
function sumar(...numeros) {
	let suma = 0;
	for (let i = 0; i < numeros.length; i++) suma += numeros[i];
	return suma;
}

console.log(sumar(3, 10, 5, 38));
