import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/createTodo/CreateTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, SetTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      description: "This is todo 1",
      status: "Not Started",
    },
    {
      id: 2,
      title: "Todo 2",
      description: "This is todo 2",
      status: "Not Started",
    },
    {
      id: 1,
      title: "Todo 3",
      description: "This is todo 3",
      status: "Not Started",
    },
  ]);

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

