// Sincronismo
// Javascript realiza las tareas en orden una por una en secuencia
// Esto causó un problema porque había algunas que necesitaban tiempo para realizarse y la ejecución se detenía hasta que se complete antes de continuar
// Para solucionar esto se creo una forma de realizar tareas paralelas, para que no haya que esperar a que una tarea se complete antes de continuar. Esta herramienta ya están incorporada en js y en el navegador
// Lo que hace js es algo así como delegar la tarea hasta que se complete mientras sigue adelante con la ejecución
// Las tareas asincónicas insertan un tema de incertidumbre en la ejecución

/* console.log("Tarea 1");
console.log("Tarea 2");

setTimeout(() => {
	console.log("Tarea 3");
}, 2000);

console.log("Tarea 4");
console.log("Tarea 5"); */

// AJAX
// Es una técnica de desarrollo que nos permite obtener un pedacito de información puntual que nos permite actualizar un pedacito de la página
// Antes cuando llamabamos a una página la respuesta era toda la página completa que debía ser rerenderizada
// Con AJAX lo que hacemos es cambiar sólo los datos de la sección que necesitamos cambiar
// XML, un lenguaje similar al html porque trabaja con etiquetas, pero se usa para enviar datos
// JSON, permite organizar los datos de una manera similiar a un objeto de js

// JQuery, librería que tiene funciones para realizar peticiones, es una caja de herramientas
// JSON Placeholder - Permite usar una api, para hacer una solicitud http, nos brinda un jason con insormación

// JQuery
// $ es una herramienta

const addUserButton = document.getElementById("addUserButton");

let i = 1;

const addUser = () => {
	if (i > 10) return alert("No hay más usuarios");
	$.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => {
		console.log(data);
		i++;
	});
};

addUserButton.addEventListener("click", addUser);
