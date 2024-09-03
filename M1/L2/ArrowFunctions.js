// Arrow Functions (M1-L2 - Video 1)
// Diferencias de sintaxis
// nombre de la función como variable un igual,  paréntesis con los parámetros, flecha, llaves, cuerpo. Se puede obviar la llave y el return si el cuerpo es una sola línea, es un return implícito
// Función tradicional, paralabra reservada function, nombre de la función, paréntesis para los parámetros, llaves, cuerpo de la función
// La arrow functions permiten trabajar funciones callback de manera más sencilla
// Se puede usar en filter(), map(), forEach, etc. funciones que requieren callbacks cortas, sencillas

function sumar1(a, b) {
	const suma1 = a + b;
	return suma1;
}

console.log(sumar1(3, 8));

// Ejemplo de Arrow Function
const suma = (a, b) => {
	return a + b;
};

console.log(suma(5, 10));

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = arrayNum.filter(function (num) {
	return num % 2 == 0;
});

console.log(pares);

const pares1 = arrayNum.filter((num) => num % 2 == 0);

console.log(pares1);

// Ejemplo Teoría Henry
const arr = ["🐣", "🦝", "🍀"];

// Función tradicional
arr.forEach(function (elemento) {
	return elemento;
});

console.log(arr);

// Función flecha
arr.forEach((elemento) => elemento);

console.log(arr);

// This
// Difiere en la froma de definir el contexto dende se ejecuta.
// Al ejecutar la función flecha, no logra establecer la referencia del this con persona a diferencia de la función declarada con function, esta establece esa referencia al momento de ejecutarse, en el contexto de ejecución, la otra se establece en el momento en que la función es definida, no ejecutada, por lo que no hay ningún objeto al que referirse
// En el uso diario en que trabajamos con una u otra función puede traernos problemas hasta que nos acostumbremos a trabajar con ellas. Al trabajar con objetos o clases y al crear métodos en ellos

const persona = {
	nombre: "Juan",
	amigos: ["María", "Pedro", "Juana"],

	saludar: function () {
		console.log("Hola, soy", this.nombre);
	},

	despedirse: () => {
		console.log("Me despido", this.nombre);
	},
};

persona.saludar();
persona.despedirse();
