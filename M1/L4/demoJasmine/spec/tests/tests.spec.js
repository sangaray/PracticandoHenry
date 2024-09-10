// ToDoList
// Debe ser una clase
// Debe tener los métodos
// - getTodos, debe retornar la lista de tareas
// - addToDo, debe pushear al array una nueva tarea
// - deleteTodo, debe eliminar la última tarea
// PASOS A SEGUIR
// 1. Pienso en palabras
// 2. Tests
// 3. Escribir el código

const ToDoList = require("../../src/index");

describe("La clase ToDoList", () => {
	it("Debe ser una clase", () => {
		expect(typeof ToDoList.prototype.constructor).toBe("function");
	});

	it("Debe tener inplementado el método getTodos", () => {
		const lista = new ToDoList();

		expect(lista.getTodos).toBeDefined();
	});

	it("Debe tener inplementado el método addTodo", () => {
		const lista = new ToDoList();

		expect(lista.addTodo).toBeDefined();
	});

	it("Debe tener inplementado el método deleteTodo", () => {
		const lista = new ToDoList();

		expect(lista.deleteTodo).toBeDefined();
	});

	it("El método getTodos() debe retornar un array", () => {
		const lista = new ToDoList();

		expect(Array.isArray(lista.getTodos()));
	});

	it("El método addTodo() debe agregar un nuevo elemento", () => {
		const lista = new ToDoList();
		lista.addTodo("Hacer la HW de la clase de hoy");
		expect(lista.getTodos()).toContain("Hacer la HW de la clase de hoy");
	});

	it("el método deleteTodo() debe eliminar la última tarea", () => {
		const lista = new ToDoList();
		lista.addTodo("A");
		lista.addTodo("B");
		lista.addTodo("C");
		lista.deleteTodo();

		expect(lista.getTodos()).toContain("A");
		expect(lista.getTodos()).toContain("B");
		expect(lista.getTodos()).not.toContain("C");
	});
});
