import styles from "./Tarjeta.module.css";
const Tarjeta = ({ personaje, clickHandler }) => {
  const { name, image, id } = personaje;

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <img
        style={{ borderRadius: "100%", width: "200px" }}
        src={image}
        alt={name}
      />
      <button onClick={() => clickHandler(id)}>Ver Detalles</button>
    </div>
  );
};

export default Tarjeta;
