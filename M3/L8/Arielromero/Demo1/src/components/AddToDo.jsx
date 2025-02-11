import { useState } from "react";
import "./../index.css";
const AddToDo = ({ setAllTodos, setContadorEstado }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setAllTodos((allTodos) => [...allTodos, newTodo]);
    setContadorEstado(
      (contadorEstado) => (contadorEstado = contadorEstado + 1)
    );
    setNewTodo("");
  };
  return (
    <div>
      <label>Ingresar nueva tarea</label>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSubmit}>Agregar Tarea</button>
    </div>
  );
};

export default AddToDo;
