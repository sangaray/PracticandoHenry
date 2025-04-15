import React from "react";
import styles from "./SubjectCard.module.css";

const SubjectCard = ({ subject }) => {
  if (!subject)
    return (
      <div className={styles.container}>
        <h2>Tema no encontrado</h2>
      </div>
    );

  const { tema, subtitulo, descripcion, imagen } = subject;

  return (
    <div className={styles.container}>
      <img src={imagen} alt={tema} />
      <div className={styles.subjectInfo}>
        <h2>{tema}</h2>
        <h3>{subtitulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default SubjectCard;
