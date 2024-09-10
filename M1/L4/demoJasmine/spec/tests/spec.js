// ToDoList
// Debe ser una clase
// Debe tener los métodos
// - getTodos, debe retornar la lista de tareas
// - addToDo, debe pushear al array una nueva tarea
// - deleteTodo, debe eliminar la última tarea

describe("La clase ToDoList", () => {
	it("Debe ser una clase", () => {
		expect(typeof ToDoList.prototype.constructor).toBe("function");
	});

	it("Debe tener inplementado el método getTodos", () => {
		const lista = new ToDpList();

		expect(list).getTodos.toBeDefined();
	});

	it("Debe tener inplementado el método addTodo", () => {
		const lista = new ToDpList();

		expect(list).addTodo.toBeDefined();
	});

	it("Debe tener inplementado el método getTodos", () => {
		const lista = new ToDpList();

		expect(list).getTodos.toBeDefined();
	});

	it("Debe tener inplementado el método deleteTodo", () => {
		const lista = new ToDpList();

		expect(list).delete.toBeDefined();
	});

	it("El método getTodos() debe retornar un array", () => {
		const lista = new ToDpList();

		expect(Array.isArray(lista.getTodos()));
	});

	it("El método addTodo() debe agregar un nuevo elemento", () => {
		const lista = new ToDpList();
		list.addTodo("Hacer la HW de la clase de hoy");
		expect(lista.getTodos()).toContain("Hacer la HW de la clase de hoy");
	});

	it("el método deleteTodo() debe eliminar la última tarea", () => {
		const lista = new ToDpList();
		lista.addTodo("A");
		lista.addTodo("B");
		lista.addTodo("C");
		lista.deleteTodo();

		expect(lista.getTodos()).toContain("A");
		expect(lista.getTodos()).toContain("B");
		expect(lista.getTodos()).not.toContain("C");
	});
});
