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
// $ es una herramienta de jquery

const addUserButton = document.getElementById("addUserButton");

let i = 1;

// Si tenemos muchos parametros, no podemos acordanos del orden de los parámetros, por lo que vamos a hacer un destructuring de las propiedades de la clase
// prettier-ignore
class User {
	constructor(id, name, username, email) {
		this.id = id, 
		this.name = name, 
		this.username = username, 
		this.email = email;
	}
}

class Repository {
  constructor() {
    this.users = [];
  }

  createUser({ id, name, username, email }) {
    const newUser = new User(id, name, username, email);
    this.users.push(newUser);
  }
}

const repository = new Repository();
// console.log(repository);

const refresh = () => {
  const usersContainer = document.getElementById("usersContainer");
  usersContainer.innerHTML = "";

  const users = repository.users;

  const htmlUsers = users.map((user) => {
    const name = document.createElement("h3");
    const email = document.createElement("p");

    name.innerHTML = user.name;
    email.innerHTML = user.email;

    const card = document.createElement("div");
    card.appendChild(name);
    card.appendChild(email);

    // console.log(name, email);
    // console.log(card);

    return card;
  });

  htmlUsers.forEach((card) => {
    usersContainer.appendChild(card);
    // console.log(usersContainer);
  });
};

const addUser = () => {
  if (i > 10) return alert("No hay más usuarios");
  $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => {
    i++;
    repository.createUser(data);
    refresh();
    /* ({
			name: data.name,
			id: data.id,
			email: data.email,
			userName: data.userName
		}) Paso el objeto completo en lugar de cada propiedad
		*/

    // console.log(data);

    // console.log(repository.users);
  });
};

addUserButton.addEventListener("click", addUser);
