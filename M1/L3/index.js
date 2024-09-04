/* Selectores
  Sirven para capturar ese elemento html en una variable, funcionan similar a los selectores de CSS.

  Cada vez que se hace un cambio en el código hay que recargar la página

  Método Selectores
  getElementById(id del eleemento HTML)

  getElementByTagName(nombre de la etiqueta)
  Crea un array con todos los elementos que tienen esa etiquta

  getElementByClassName

  Probar todo el código de este documento, en la consola del navegador
*/

const titulo = document.getElementById("titulo");
console.log(titulo);

titulo.innerHTML = "Otro texto distinto";

const unaPalabra = "unaVariable";

const divs = document.getElementsByTagName("div");

console.log(divs);

const ultimoCuadrado = divs[divs.length];

console.log(ultimoCuadrado);

const cuadradosRojos = document.getElementsByClassName("rojo");

console.log(cuadradosRojos);

const unCuadro = cuadradosRojos[1];

const cuadrados = document.getElementsByTagName("div");

console.log(cuadrados);

const cuadrado = cuadrados[3];

console.log(cuadrado);

cuadrado.classList.add("verde");
