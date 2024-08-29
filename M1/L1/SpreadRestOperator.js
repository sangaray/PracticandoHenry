// Tema 10
// Spread Operator
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

// Reas operator
function sumar(...numeros) {
	let suma = 0;
	for (let i = 0; i < numeros.length; i++) suma += numeros[i];
	return suma;
}

console.log(sumar(3, 10, 5, 38));
