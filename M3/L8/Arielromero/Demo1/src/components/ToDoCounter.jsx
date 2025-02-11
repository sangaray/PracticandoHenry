import "./../index.css";

const ToDoCounter = ({ contadorEstado, titulo }) => {
  return (
    <div
      style={{
        backgroundColor: "#5f48f5",
        borderRadius: "10px",
        padding: "5px",
      }}>
      <h3>
        {titulo}: {contadorEstado}
      </h3>
    </div>
  );
};

export default ToDoCounter;
