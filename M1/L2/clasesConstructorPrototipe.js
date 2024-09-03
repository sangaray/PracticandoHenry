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
