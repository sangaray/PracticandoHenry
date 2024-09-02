// Object Literal (Video 5)
// Antes de ES6 tenía que ejecutar el constructor del objeto, crear una instancia del objeto para poder agregar las propiedad y el valor
// Con ECMAScript aparecieron los objetos literales, dende no necesitamos crear el objeto a partir de una instancia, sino que se crea directamente.
// Si tuviera variables declaradas previamente a la creación del objeto, puedo, crear un objeto cuyas propiedades tengan como valor los de las variables creadas

const nombre2 = "Jorge";
const apellido2 = "Vega";

const persona2 = {
	nombre2: nombre2,
	apellido2: apellido2,
};

console.log(persona2);

// También puedo envía los parámetros a la función, creo el objeto que toma las propiedades de los parámetros de la función. Si el nombre del parámetro es igual al de la propiedad puedo no escribir la igualdad

function unaFuncionCualquiera(nombre3, apellido3, edad3) {
	const persona3 = {
		nombre3,
		apellido3,
		edad3,
	};
	return persona3;
}

console.log(unaFuncionCualquiera("Jorge", "Vega", 35));

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
