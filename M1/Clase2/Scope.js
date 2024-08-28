// Tema 2  - Scope
// Global
var globalVariable = "Soy global";

function ejemplo() {
	console.log(globalVariable);
}

console.log(globalVariable + " 2");
ejemplo();

// Local
function ejemploScopeLocal() {
	var variableLocal = "Soy local";
	console.log(variableLocal);
}

ejemploScopeLocal();

// console.log(variableLocal); Error

// Block Scope
if (true) {
	let blockVariable = "Soy de alcance de bloque";
	console.log(blockVariable);
}

// console.log(blockVariable); Error
