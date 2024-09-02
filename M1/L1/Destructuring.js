// Destructuring (Video 6)
// Permite extraer propiedades de un objeto sin tener que definir variables por separado, porque podemos querer usar esos datos en distintos lugares de la aplicación pero no se usa para la misma cosa ni todos los datos
// Desestructurar es hacer esto de una manera más sencilla, sin esto tengo que declarar una variable para cada propiedad. Así puedo declarar variables que van a tomar el valor que les corresponde según el objeto, se puede hacer para todas las propiedades necesarias
const persona = {
	nombre1: "Carlos",
	apellido1: "Perez",
	edad1: 50,
	email: "perez@gmail.com",
	direccion: "Calle Falsa 123",
	ciudad: "Posadas",
	pais: "Argentina",
};

function mostrarNombre(persona) {
	const { nombre1, apellido1 } = persona;
	console.log("El nombre de usuario es ", nombre1, " y su apellido es ", apellido1);
}

mostrarNombre(persona);

// Con Arrays
// Prestar atención, a trabajar con arreglos que tienen pocos elementos y que tenemos total certeza del orden de esos elementos. En este caso no usamos llaves, usamos corchetes paar la desestructuración. En los objetos no importa el orden porque cada valor está asociado al nombre de su propiedad, pero en arrays no estamos hablando de clave valor de la misma forma, sino que tenemos la posición y el valor, pero la desestructuración va a tomar los valores en el mismo orden en que estén dentro de él
// Deben estar dentro de array de desestructuración representados todos los valores del array original para que funcione.

const miArray = [1, 2, 3, 4];
const [num1, num2, num3, num4] = miArray;

console.log(num3, num1);

// Ejemplos de la Teoría dada por Henry

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
