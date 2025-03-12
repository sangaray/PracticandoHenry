import { useContext } from "react";
import { TodosContext } from "../../context/Todos";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  // const [todos, setTodos] = useState([]);

  return (
    <ul>
      {todos.map((tarea, index) => (
        <li key={index}>
          <div>{tarea.title}</div>
          <div>{tarea.description}</div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
