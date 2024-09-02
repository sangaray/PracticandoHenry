// Scope (Video 4)
// Las variables declaradas con VAR son accesibles prácticamente desde cualquier lugar del código, siempre son de alcance global
// Las variables declaradas con LET y CONST son de alcance local o de bloque, no pueden ser utilizadas fuera del bloque en que fueron declaradas
// Cuando declaramos variables con
// CONST para variables que no queremos que cambien en nungún momento
// LET para que se limite al lugar donde tiene sentido que se ejecute esa variable, pero si quiere cambiar su valor más adelante
// VAR se deja atrás ya que puede causar problemas en la ejecución del código y su funcionalidad

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
