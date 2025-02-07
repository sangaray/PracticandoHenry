/* En lugar de usar props como parámetro del componente, vamos a desestructurar la prop y poner en este caso {character} y en la constante también ponemos sólo character 
Otra forma de hacerlo es desestructurando es destructuring.
{ character: { name, house } } y en la constante { name, house }.
*/

import styles from "./Card.module.css";
const Card = ({ character: { name, house } }) => {
  // console.log(props);
  // const { name, house } = character;
  // console.log(name, house);
  return (
    <div className={styles.container}>
      <h2 className="title">{name}</h2>
      <h3>{house}</h3>
    </div>
  );
};

export default Card;
