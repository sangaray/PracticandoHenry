// Clases - Constructor y Prototipos
// Prototipo (M1-L2 - Video 4)
// JS es un lenguaje basado en prototipos, no en clases, en realidd en el detrás de escena estamos trabajando cosas que no vemos en el código
// Originalmente JS trabajaba con funciones constructoras
// Una función constructora es una función con la que después voy a crear una instancia de ese objeto
// creo la instancia con los valores de los parámetros. Nos va a servir como molde o modelo para el objeto

function Persona(nombre, edad) {
	// prettier-ignore
	this.nombre = nombre,
  this.edad = edad
}

// Logramos darle al prototipo de funciona una propiedad con una función. En el console.log no aparece el método del prototipo. Al usar new, es una instancia que es un eslabón más en la cadena de prototipos, todo lo que hay en el prototipo pasa a la instancia que creamos a partir de la función creadorea de esa instancia

Persona.prototype.saludar = function () {
	console.log("Hola. Soy", this.nombre);
};

const persona1 = new Persona("Jorge", 32);
console.log(persona1);

persona1.saludar();

// Estructura, sintaxis y métodos (M1-L2 - Video 5)
// Lo que ocurre por detrás trabajamos con una cadena de prototipos. Las clases son una sintaxis, una máscara que hace que se parezca más a oros lenguajes OOP
// Nombre de la clase, la primera letra siempre en mayúsculas
// Las clases tienen un método constructor que es el que recibe los parámetros
// Vamos a crear una propiedad que va a ser un array
// Método dinámico de la instancia que creamos. No necesariamente las propiedades van a ser todas inicializadas al momento de instanciar. Puedo inicializar una propiedad y las instancias van a tomar ese valor, puedo cambiar el valor creando un método de lo coambie
// Importante tener en cuenta que las propiedades va a representar un concepto de un objeto de la vida real y los métodos expresan acciones que ese objeto puede hacer
// Así como traemos un concepto de la vida real al código, tambien podemos tener una persona que tenga una profesión sin dejar de ser persona.

class Persona2 {
	constructor(nombre, edad) {
		(this.nombre = nombre), (this.edad = edad), (this.amigos = []);
		this.sentado = true;
	}

	agregarAmigo(nombreAmigo) {
		this.amigos.push(nombreAmigo);
	}

	pararse() {
		this.sentado = false;
	}

	sentarse() {
		this.sentado = true;
	}
}

const persona2 = new Persona2("Severus", 38);

console.log(persona2);

persona2.agregarAmigo("Lucius");
persona2.agregarAmigo("Regulus");

console.log(persona2);

persona2.pararse();

console.log(persona2);

persona2.sentarse();

console.log(persona2);

// Ejemplo Teoría de Henry
// Constructor(nombre, identidad, superpoder){}
// Propiedades: this.nombre, this.identidad, this.superpoder
// Métodos, se crean fuera del consturctor: volar
// Instancia: se crea igualando una variable a new. const variable = new clase(parámetros)

class SuperHeroe {
	constructor(nombre, identidad, superpoder) {
		(this.nombre = nombre), (this.superpoder = superpoder), (this.identidad = identidad);
	}

	volar() {
		console.log("Mi nombre es", this.nombre);
	}
}

let superman = new SuperHeroe("Superman", "Clark Kent", ["Volar", "Fuerza"]);

superman.volar();

console.log(superman);
