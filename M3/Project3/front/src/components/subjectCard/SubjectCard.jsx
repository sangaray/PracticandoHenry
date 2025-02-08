import math from "../../assets/Matematica.jpg";
import styles from "./SubjectCard.module.css";

const SubjectCard = () => {
  return (
    <div className={styles.container}>
      <img src={math} alt="matematica" />
      <div className={styles.subjectInfo}>
        <h2>Matemáticas - El Encanto Oculto de los Números</h2>
        <p>
          A menudo, las matemáticas son vistas como una asignatura fría y
          distante, un conjunto de reglas y fórmulas a memorizar. Sin embargo,
          para aquellos que logran descubrir su belleza intrínseca, las
          matemáticas se transforman en un apasionante viaje de descubrimiento y
          creación.
        </p>
      </div>
    </div>
  );
};

export default SubjectCard;
