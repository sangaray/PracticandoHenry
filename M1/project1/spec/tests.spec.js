const { Repository, Activity } = require("../scripts/index");

describe("La clase Repository...", () => {
	it("Debe ser una clase", () => {
		expect(typeof Repository.prototype.constructor).toBe("function");
	});

	it("Debe tener inplementado el método getAllActivities", () => {
		const repo = new Repository();

		expect(repo.getAllActivities).toBeDefined();
	});

	it("Debe tener inplementado el método createActivity", () => {
		const repo = new Repository();

		expect(repo.createActivity).toBeDefined();
	});

	it("Debe tener inplementado el método deleteActivity", () => {
		const repo = new Repository();

		expect(repo.deleteActivity).toBeDefined();
	});

	it("El método getTodos() debe retornar un array", () => {
		const repo = new Repository();

		expect(Array.isArray(repo.getAllActivities()));
	});

	it("El método createActivity() debe agregar un nuevo elemento", () => {
		const repo = new Repository();

		repo.createActivity("Play videogames", "Pasar bien el día", "jugando.jpg");

		const activities = repo.getAllActivities();

		expect(activities).toEqual([
			jasmine.objectContaining({
				title: "Play videogames",
				description: "Pasar bien el día",
				imgUrl: "jugando.jpg",
			}),
		]);
	});

	it("el método deleteActivity() debe eliminar la última tarea", () => {
		const repo = new Repository();

		repo.createActivity("Play videogames", "Pasar bien el día", "jugando.jpg");

		// Primero creamos la actividad
		let activities = repo.getAllActivities();

		// Ahora eliminamos la última actividad
		repo.deleteActivity();

		// Después de la eliminación, volvemos a obtener las actividades
		activities = repo.getAllActivities();

		// Verificamos que la actividad eliminada ya no esté en la lista
		expect(activities).not.toContain("Play videogames", "Pasar bien el día", "jugando.jpg");
	});
});
