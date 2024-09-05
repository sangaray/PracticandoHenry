/* Eventos 
  id = cuando quiero identificar un objeto en el DOM especificamente, en js
  Cuando pase esto quiero que hagas esto otro

  getElementByTagName es un array de elementos html

  addEventListener("evento", función callback)
  La función si es pequeña se pone en el argumento y si es larga la pongo aparte
*/

const agregar = document.getElementById("agregar");
const body = document.getElementsByTagName("body")[0];

/*const cb = () => console.log("Hicimos click en el botón o probando...")


La cb recibe sin que hagams nada un evento, el mismo evento que acaba de dispararse que tiene propiedades, una de ellas es target, esta es el elemento que disparó el evento

*/

const cb = () => {
	const nuevoDiv = document.createElement("div");
	nuevoDiv.classList.add("cuadrado");
	nuevoDiv.classList.add("rojo");

	nuevoDiv.addEventListener("click", (event) => {
		event.target.remove();
	});

	body.appendChild(nuevoDiv);
};

agregar.addEventListener("click", cb);
