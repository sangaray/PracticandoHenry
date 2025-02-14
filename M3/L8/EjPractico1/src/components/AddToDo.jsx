import "./../index.css";
const AddToDo = () => {
  function handleSubmit(event) {
    event.preventDefault();

    console.log(event.target.elements.todo.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default AddToDo;
