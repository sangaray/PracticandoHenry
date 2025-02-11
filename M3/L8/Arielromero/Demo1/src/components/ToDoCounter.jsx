import "./../index.css";
import styles from "./ToDoCounter.module.css";

const ToDoCounter = ({ contadorEstado, titulo }) => {
  return (
    <div className={styles.container}>
      <h3>
        {titulo}: {contadorEstado}
      </h3>
    </div>
  );
};

export default ToDoCounter;
