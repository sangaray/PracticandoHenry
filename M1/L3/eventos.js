/* Eventos 
  id = cuando quiero identificar un objeto en el DOM especificamente

  Cuando pase esto quiero que hagas esto otro

  getElementByTagName es un array
*/

const agregar = document.getElementById("agregar");
console.log(agregar);
const body = document.getElementsByTagName("body")[0];

/*const cb = () => console.log("Hicimos click en el botón o probando...")

La cb recibe sin que hagams nada un evento, el mismo evento que acaba de dispararse que tiene propiedades, una de ellas es target, esta es el elemento que disparó el evento

*/

const cb = () => {
	const nuevoDiv = document.createElement("div");
	console.log(nuevoDiv);
	nuevoDiv.classList.add("cuadrado");
	nuevoDiv.classList.add("rojo");
  nuevoDiv.addEventListener("click", (event) => event.target(remove());

  body.appendChild("nuevoDiv")
};

agregar.addEventListener("click", cb);
