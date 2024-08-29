// Tema 9
// Destructuring
function crearPersonas({ nombre, apellido, edad }) {
	console.log(nombre, apellido, edad);
}

crearPersonas({ nombre: "Lucas", apellido: "Romero", edad: 22 });

const gato = {
	nombre: "Leia",
	color: "gris manchado",
	casa: true,
};

function gatito({ nombre, color, casa }) {
	console.log(`Su nombre es: ${nombre}, es de color ${color}`);
}

gatito(gato);
