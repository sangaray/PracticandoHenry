/* Cuando trabajamos con componentes en lugar de usar class, usamos classname como atributo de la etiqueta */

import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.container}>
      {/* se usa <div></div> o un <></> fragment */}
      <h1 className="title">Card</h1>
      <h3>Nombre: Dai</h3>
      <p>Email: daiana@gmail.com</p>
    </div>
  );
};

export default Card;
