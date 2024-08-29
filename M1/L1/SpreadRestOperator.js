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
