// Tema 4
// Objetos antes de ES6
var obj = new Object();
obj.nombre = "José";
obj.edad = 35;
console.log(obj);

// Después de ES6
let obj1 = {
	apellido: "Perez",
	direccion: "calle 123",
};

console.log(obj1);

// Tema 6
// Propiedad Dinámica
const gryffindor = {
	casa: "Gryffindor",
	ubicacion: "Torre del castillo",

	asignarPropDinamica(clave, valor) {
		this[clave] = valor;
	},
};

gryffindor.asignarPropDinamica("alumno", "Harry Potter");

console.log(gryffindor);

// Resumen
var obj2 = {
	saludo: "Hola",
	saludar() {
		console.log(this.saludo), ["prop" + "Dinamica"];
	},
};

console.log(obj2);
