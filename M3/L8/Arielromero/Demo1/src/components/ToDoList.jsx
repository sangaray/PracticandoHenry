import "./../index.css";
import { useState } from "react";
import styles from "./ToDoList.module.css";

const ToDoList = ({ allTodos }) => {
  const [todos, setTodos] = useState();

  return (
    <div className={styles.container}>
      <h2>Lista de tareas:</h2>
      <ul>
        {allTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
