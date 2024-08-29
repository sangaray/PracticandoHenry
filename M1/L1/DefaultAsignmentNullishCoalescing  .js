// Tema 12
// Asignación por Default
function saludar(nombre = "Invitado") {
	console.log(`Hola ${nombre}!`);
}

saludar();
saludar("Severus");

// Tema 13
// Nulling Coalescing
let valor1 = null;
let valor2 = "Valor por defecto";

let resultado = valor1 ?? valor2;
console.log(resultado);

// Ejercicio
let a = null;
let b = "Texto1";
let c = "Texto2";
let d = undefined;

let resultado1 = d ?? c;
console.log(resultado1);
