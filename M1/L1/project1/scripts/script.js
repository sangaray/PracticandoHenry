class Activity {
	constructor(id, title, description, imgUrl) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.imgUrl = imgUrl;
	}
}

class Repository {
	constructor() {
		this.activities = [];
	}

	getAllActivities() {
		console.log(this.activities);
	}

	createActivity(id, title, description, imgUrl) {
		const activity = new Activity(id, title, description, imgUrl);
		this.activities.push(activity);
	}
}

// Ejemplo de uso:
const repo = new Repository();
repo.createActivity(1, "Trekking", "A mountain trekking activity", "image.jpg");
repo.createActivity(2, "Swimming", "A swimming activity in the ocean", "swimming.jpg");
repo.getAllActivities();
