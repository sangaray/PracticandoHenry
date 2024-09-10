class ToDoList {
	constructor() {
		this.toDoList = [];
	}

	addTodo(todo) {
		this.toDoList.push(todo);
	}

	getTodos() {
		return this.toDoList;
	}

	deleteTodo() {
		this.toDoList.pop();
	}
}

module.exports = ToDoList;
