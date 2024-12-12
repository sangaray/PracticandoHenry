// VARIABLES Y FUNCIONES - HOISTING
// Si usamos let y tratamos por ejemplo de hacer un console.log de esa variable, se producirá un error, pero si usamos var no da error, pero devuelve undefined para la variable.
// Las variables declaradas con var y las funcione declaradas con function tienen una capacidad llamada hoisting que consiste
// El interprete lee todo el código y agrega al su entorno lexico  todas las variables declaras con var y las funciones declaradas con function, ya sabe que existen estas variables, pero no les va a asignar un valor hasta que la ejecución defina ese valor. Estas variables ya forman parte del entorno, por eso al executarlas nos da undefined, esto se debe a que todavía no tienen un valor definido todavía. Cuando la ejecución avance y ya sepamos cuales son los valores los va a agregar a la variable correspondiente
// num1, num2, num,
// A las funciones func sumar, func miFunc sí se las llleva completas
// inicializar y declarar variables son dos cosas distintas.
// El intérprete hace la lectura del código antes de que este se ejecuta.
// La segunda vez que intento hace console.log de num, va a returnar no defined, porque el contexto de ejectución de la función ya se cerró.
// Nunca podría buscar una variable de un contexto padre que está en el contexto del hijo, si puedo hacerlo al revés

console.log(num1);
console.log(num2);

var num1 = 5;
var num2 = 10;

function sumar(a, b) {
  return a + b;
}

function miFunc() {
  var num = 10;
  num1 = 8;
  console.log(num1);
  console.log(num2);
  console.log(num);
}

miFunc();

console.log(num1);
console.log(num2);
console.log(num);
