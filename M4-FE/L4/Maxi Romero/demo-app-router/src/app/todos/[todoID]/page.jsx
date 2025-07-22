const fetchedData = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const items = await data.json();
  return items;
};

const TodosDatail = async ({ params }) => {
  console.log("params", params);
  const items = await fetchedData(params.todoID);

  return (
    <div>
      <h1>Todo Detail</h1>
      <h2>{items.title}</h2>
      <p>{items.completed === true ? "Completed" : "Uncompleted"}</p>
    </div>
  );
};

export default TodosDatail;
