// Template Literals
// Concatenar Cadenas Antes ES6
function antesDeES6(nombre, identidadSecreta) {
	console.log("Este es " + nombre + " mejor conocido como " + identidadSecreta);
}

antesDeES6("Peter Parker", "Hombre Araña");

// Concatenar Cadenas Desde ES6

function templateString(nombre, identidadSecreta) {
	console.log(`Este es ${nombre} mejor conocido como ${identidadSecreta}`);
}

templateString("Clark Kent", "Superman");

// Tena 8
// Scape Sequence
function imprimirMensaje() {
	return "Mensae:\n aquí hubo un salto de línea";
}

console.log(imprimirMensaje());
