import { useState, useContext } from "react";
import { TodosContext } from "../../context/Todos.jsx";

const CreateTodo = () => {
  const { addTodo } = useContext(TodosContext);

  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={input.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={input.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Agregar Tarea</button>
      </div>
    </form>
  );
};

export default CreateTodo;
