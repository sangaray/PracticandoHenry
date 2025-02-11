import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoCounter from "./components/ToDoCounter";
import { useState } from "react";

function App() {
  const [contadorEstado, setContadorEstado] = useState(0);
  const [allTodos, setAllTodos] = useState([]);

  return (
    <>
      <h1>ToDo List</h1>
      <hr />
      <AddToDo
        setAllTodos={setAllTodos}
        setContadorEstado={setContadorEstado}
      />

      <ToDoCounter
        contadorEstado={contadorEstado}
        titulo={"Tareas Pendientes"}
      />
    </>
  );
}

export default App;

