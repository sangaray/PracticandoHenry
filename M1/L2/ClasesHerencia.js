// Herencia (M1-L2 - Video 6)
// conceptos de la vida real abstraidos a una clase, pero a veces un tipo de objeto puede ser más de un tipo de objeto. Por lo tanto la clase hija va a heredar las propiedades y métodos de la clase padre. Lllevandse la información de la clase padre. Para poder hacer esto debemos ejecutar el constructor de la clase padre usando el método super() dentro del constructo de la clase hija

class Persona {
	constructor(nombre, edad) {
		// prettier-ignore
		this.nombre = nombre,
    this.edad = edad, 
    this.amigos = [];
		this.sentado = true;
	}

	agregarAmigo(nombreAmigo) {
		this.amigos.push(nombreAmigo);
	}

	pararse() {
		this.sentado = false;
	}

	sentado() {
		this.sentado = true;
	}
}

class Doctor extends Persona {
	constructor(nombre, edad, nMatricula) {
		super(nombre, edad);
		this.nMatricula;
	}
}

const doctor1 = new Doctor("Chapatín", 80, 59394);
console.log(doctor1);

doctor1.agregarAmigo("Pedro");
console.log(doctor1);
