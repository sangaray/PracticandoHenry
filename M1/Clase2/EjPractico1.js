// Ejercicios sobre Temas 1 y 2
// Ejemplo 1
var caja = 5;
if (true) {
	var caja = [];
}
console.log(caja);

// Ejemplo 2
var caja1 = 5;
if (true) {
	var caja1 = [];
}
if (true) {
	let caja1 = "No hay cambios";
}

console.log(caja1);

// Ejemplo 3
// Ejemplo con Var
for (var i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i);
	});
}

setTimeout(function () {
	console.log("Valor final de 'i' usando 'var': " + i);
}, 6000);

// Ejemplo con Let
for (let i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i);
	});
}

setTimeout(function () {
	console.log("Valor final de 'i' usando 'var': " + i);
}, 6000);
