import { useState } from "react";
import styles from "./Tarjeta.module.css";
import Detalle from "../detalle/Detalle";
const Tarjeta = ({ personaje }) => {
  const { name, image } = personaje;
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  const clickHandler = () => {
    setMostrarDetalle(true);
  };

  const closeHandler = () => {
    setMostrarDetalle(false);
  };

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <img
        style={{ borderRadius: "100%", width: "200px" }}
        src={image}
        alt={name}
      />
      {!mostrarDetalle && <button onClick={clickHandler}>Ver Detalles</button>}

      {mostrarDetalle && (
        <Detalle
          personaje={personaje}
          closeHandler={() => setMostrarDetalle(false)}
        />
      )}
    </div>
  );
};

export default Tarjeta;
