// CLOSURES
// Encapsular una variable para evitar que una variable sea afectada de una manera no prevista
// Closure es cuando una función retorna otra función y utilizar alguna variable de la función padre.
// Se crea un contexto global crearContador, tengo count = 0, retorna una función que usa la variabl
// Una vez que retornó el contexto desaparece
// Cuando ejecuto la función contador  se crear un nuevo contexto, pero count donde está, no está declarada en el contexto de contador. Esto funciona porque hicimos un closure
// count se va a quedar, porque sabe que en algún lugar hay una función que lo necesita
// No tengo forma de modificar a count si no es desde la función hija, contador en este caso.
// En el manejo de errores (catchAsync) que hicimos en clases anteriores utiliza closures

function crearContador() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const contador = crearContador();

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
