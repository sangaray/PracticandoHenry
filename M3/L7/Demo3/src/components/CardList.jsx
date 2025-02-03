{
  /* Siempre se rederiza una sola etiqueta que envuelve a todas las etiquetas de componentes  
  /* Todos estos son componentes estáticos, no tienen lógica, no tienen estado, no tienen props y no hacen nada a la hora de hacer click en ellos en el navegador */
}

import Card from "./Card.jsx";
import styles from "./CardList.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
