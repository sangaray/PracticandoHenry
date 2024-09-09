// Creamos la clase de las Actividades
class Activity {
	constructor(id, title, description, imgUrl) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.imgUrl = imgUrl;
	}
}

// Creamos el repositorio donde se van a guardar las actividades
class Repository {
	constructor() {
		this.activities = [];
		this.currentId = 1;
	}

	// Método que permite mostrar todas las actividades agregadas
	getAllActivities() {
		return this.activities;
	}

	// Método que permite agregar nuevas actividades
	createActivity(title, description, imgUrl) {
		if (title && description && imgUrl) {
			const activity = new Activity(this.currentId, title, description, imgUrl);
			this.activities.push(activity);
			this.currentId++;
		} else {
			console.log("Datos incompletos. La película no ha sido agregada.");
		}
	}

	deleteActivity(id) {
		this.activities = this.activities.filter((elemento) => elemento.id !== id);
	}
}

// Implementar las funciones necesarias para lograr la funcionalidad de la sección “Mis Actividades Favoritas”.
// 1.	Crear una instancia de la clase Repository con la que trabajaremos en toda la actividad.

const repo = new Repository();

// Datos de prueba y testeo de los métodos creados
repo.createActivity(
	"Trekking",
	"Visitanto unas hermosas montañas",
	"https://vietchallenge.com/images/uploads/trekking2.jpg"
);
repo.createActivity(
	"Nadar",
	"Nadar en el océano",
	"https://static.vecteezy.com/system/resources/previews/015/853/842/large_2x/young-woman-swimming-in-the-sea-on-sunrise-photo.jpg"
);
repo.createActivity(
	"Leer",
	"Despertando la imaginación con una buena historia",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQKnFliyJGf6k1_zWfohlG7Qte-AtIf30aA&s"
);
repo.getAllActivities();

console.log(repo);

// ACTIVIDAD 02
// Implementar una función que tomará UNA instancia de Activity y la convertirá en elemento HTML. Esta función nos servirá más adelante. La función deberá:
const testActivity = new Activity(1, "Trekking", "Visitando unas hermosas montañas", "image.jpg");

// console.log(testActivity);

// 1.	Recibir por parámetro un objeto instancia de Activity.
function createActivityCard(activity) {
	// 2.	Extraer sus propiedades en variables utilizando destructuring.
	const { title, description, imgUrl } = activity;

	// console.log(activity);
	// console.log(`Title: ${title}, Descripción ${description}, Image ${imgUrl}`);

	// 3.	Crear los elementos HTML que formarán parte de la tarjeta. Ej: <h3> para el título, <p> para la descripción, <img> para la imagen.
	const deleteButton = document.createElement("div");
	const titleElement = document.createElement("h3");
	const descriptionElement = document.createElement("p");
	const imgElement = document.createElement("img");

	// console.log(titleElement, descriptionElement, imgElement);

	// 4.	Asignar los valores a las propiedades correspondientes a cada uno de los elementos. Ej: a la propiedad innerHTML del elemento del título, asignar el valor correspondiente. A la propiedad src del elemento de la imagen, asignar el valor correspondiente.
	deleteButton.innerHTML = "X";
	titleElement.innerHTML = title;
	descriptionElement.innerHTML = description;
	imgElement.src = imgUrl;
	imgElement.alt = title;

	// console.log(titleElement, descriptionElement, imgElement);

	// 5.	Agregar a los elementos las clases CSS correspondientes que hayas implementado para darles estilos.
	titleElement.classList.add("activityTitle");
	descriptionElement.classList.add("activityDescription");
	imgElement.classList.add("activityImage");
	deleteButton.id = "deleteButton";

	//console.log(titleElement, descriptionElement, imgElement);

	// 6.	Crear un elemento <div> que será la tarjeta donde incluiremos todos los demás elementos.
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("activityCard");

	//console.log(cardDiv);

	// 7.	“Appendear” al nuevo <div> los elementos creados anteriormente
	cardDiv.appendChild(deleteButton);
	cardDiv.appendChild(titleElement);
	cardDiv.appendChild(descriptionElement);
	cardDiv.appendChild(imgElement);

	// console.log(cardDiv);

	// 9.	Retornar el <div> finalizado con todos los elementos correspondientes dentro.

	return cardDiv;
}

createActivityCard(testActivity);

// ACTIVIDAD 03
// Implementar una función que se encargará de “convertir” TODAS las instancias de Activity en elementos HTML para agregarlos al contenedor correspondiente. La función deberá:
function renderAllActivities() {
	// 1.	Seleccionar el contenedor donde queremos agregar las actividades.
	const activitiesContainer = document.getElementById("cardsContainer");

	// console.log(activitiesContainer);

	// 2.	Vaciar el contenido actual del contenedor. Se puede hacer manipulando la propiedad innerHTML.
	activitiesContainer.innerHTML = "";

	// 3.	Obtener el listado completo de actividades mediante el método correspondiente de una instancia de Repository.
	const activities = repo.getAllActivities();

	// console.log(repo);

	// 4.	“Mapear” el listado de actividades para convertirlos todos en elementos HTML. Para ello utilizar el método “map”, aprovechando como callback la función que hicimos en el punto anterior. Guardar el resultado del mapeo en una nueva variable.
	const activityCards = activities.map((activity) => createActivityCard(activity));

	// console.log(activityCards);
	// console.log(repo);

	// 5.	“Appendear” todos los elementos HTML del nuevo array dentro del contenedor seleccionado. Para ello puedes utilizar el método forEach.
	activityCards.forEach((card) => activitiesContainer.appendChild(card));

	// console.log(activitiesContainer);
}

renderAllActivities();

// Implementar la función handler que se ejecutará al disparar el evento del botón. La misma deberá:
function handleCreateActivity() {
	// 1.	Seleccionar los inputs de title, description e imgUrl.
	const titleInput = document.getElementById("activity");
	const descriptionInput = document.getElementById("description");
	const imgUrlInput = document.getElementById("image");

	//console.log(titleInput, descriptionInput, imgUrlInput);

	// 2.	Tomar los valores ingresados en los inputs y guardarlos en variables.
	const title = titleInput.value.trim();
	const description = descriptionInput.value.trim();
	const imgUrl = imgUrlInput.value.trim();

	// console.log(title, description, imgUrl);

	// 3.	Validar que estos valores estén completos. De lo contrario deberá cortar el proceso y mostrar un mensaje avisando al usuario de que hay datos incompletos.
	if (!title || !description || !imgUrl) {
		alert("Por favor, completa todos los campos antes de continuar.");
		return; // Cortar el proceso si los datos no están completos
	}

	// 4.	Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad.
	repo.createActivity(title, description, imgUrl);

	// 5.	Invocar la función que implementamos en el punto anterior para “refrescar” el contenedor de actividades.
	renderAllActivities(repo);

	// Limpiar los inputs después de crear la actividad
	titleInput.value = "";
	descriptionInput.value = "";
	imgUrlInput.value = "";
}

// handleCreateActivity();

// ACTIVIDAD 05
// 1.	Seleccionar el botón que disparará el evento de agregar actividad y agregar un Event Listener. El evento, al dispararse, debe ejecutar la función que creamos en el punto anterior.
// Seleccionamos el botón de "Enviar"
const submitButton = document.getElementById("submit");
// console.log(submitButton);

// Agregamos el Event Listener para que ejecute la función cuando se haga clic
submitButton.addEventListener("click", () => {
	console.log("Botón 'Enviar' clickeado");
	handleCreateActivity();
});

// 2.	EXTRA CREDIT. Implementar la funcionalidad de eliminar tarjetas del contenedor al hacer click sobre ellas o sobre algún nuevo botón que podamos agregar a las mismas. Eres libre de encarar esta funcionalidad de la manera que consideres adecuada.  Puedes apoyarte en la IA para ayudarte a realizar este punto.
// Renderizar actividades predefinidas
// Event Listener para eliminar la tarjeta
const deleteCard = document.getElementById("deleteButton");

console.log(deleteCard);

deleteCard.addEventListener("click", () => {
	// Eliminar la actividad del repositorio (opcional)
	console.log("El botón eliminar card fue clickeado");
	repo.deleteActivity(id);

	// Remover la tarjeta del DOM
	card.remove();

	console.log(`Actividad con id ${id} eliminada.`);
});

renderAllActivities(repo);
