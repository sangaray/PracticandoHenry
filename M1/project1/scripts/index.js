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
		console.log(this.activities);
	}

	// Método que permite agregar nuevas actividades
	createActivity(title, description, imgUrl) {
		const activity = new Activity(this.currentId, title, description, imgUrl);
		this.activities.push(activity);
		this.currentId++;
	}

	deleteActivity(id) {
		this.activities = this.activities.filter((elemento) => elemento.id !== id);
	}
}

// Ejemplo de prueba:
const repo = new Repository();
repo.createActivity("Trekking", "Visitanto unas hermosas montañas", "image.jpg");
repo.createActivity("Nadar", "Nadar en el océano", "swimming.jpg");
repo.createActivity("Leer", "Despertando la imaginación con una buena historia", "leyendo.jpg");
repo.getAllActivities();
repo.deleteActivity(2);

console.log(repo);
