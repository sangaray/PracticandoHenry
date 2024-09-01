class Gato {
	constructor(nombre, edad, color, raza, esDomestico) {
		this.nombre = nombre;
		this.edad = edad;
		this.color = color;
		this.raza = raza;
		this.esDomestico = esDomestico;
	}

	describir() {
		const domestico = this.esDomestico ? "doméstico" : "salvaje";
		return `Este gato se llama ${this.nombre}, tiene ${this.edad} años, es de color ${this.color}, es de raza ${this.raza} y es un gato ${domestico}.`;
	}
}

const miGato = new Gato("Mishka", 3, "blanco", "Persa", true);
document.getElementById("descripcion").innerText = miGato.describir();
