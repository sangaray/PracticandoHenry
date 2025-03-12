import { useContext, useState } from "react";
import { TodosContext } from "../../context/Todos";

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodosContext);
  // const [todos, setTodos] = useState([]);

  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const handleDelete = (title) => {
    removeTodo(title);
  };

  return (
    <ul>
      {todos.map((tarea, index) => (
        <li key={index}>
          <div>{tarea.title}</div>
          <div>{tarea.description}</div>
          <div>
            <button onClick={() => handleDelete(tarea.title)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

/* 
COMPONENTE TODO
import style from "./TodoList.module.css";
function Todo({ todo }) {
  return (
  div className={style.todo}>
  h4>{todo.title}</h4>
  p>{todo.description}</p>
  button>Remove</button>
  </div>
  );
}
*/
