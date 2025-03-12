import { useContext } from "react";
import { TodosContext } from "./context/Todos";
import "./App.css";
import CreateTodo from "./components/createTodo/CreateTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      <div>
        <h3>Create Todo</h3>
        <CreateTodo />
      </div>
      <div>
        <h3>Todo List</h3>
        {todos.length === 0 && <p>No Todos</p>}
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;

