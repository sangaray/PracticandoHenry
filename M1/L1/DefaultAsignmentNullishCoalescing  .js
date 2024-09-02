// Asignación por Default
function saludar(nombre = "Invitado") {
	console.log(`Hola ${nombre}!`);
}

saludar();
saludar("Severus");

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

let resultado1 = a ?? b;
let resultado2 = b ?? a;
let resultado3 = c ?? a;
let resultado4 = d ?? c;
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
