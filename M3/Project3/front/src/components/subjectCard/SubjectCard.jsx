import React from "react";
import styles from "./SubjectCard.module.css";

const SubjectCard = ({ subject }) => {
  console.log(subject);

  if (!subject) {
    return (
      <div className={styles.container}>
        <h2>Tema no encontrado</h2>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <img src={subject.imagen} alt={subject.tema} />
      <div className={styles.subjectInfo}>
        <h2>Tema: {subject.tema}</h2>
        <h3>Subtítulo:{subject.subtitulo}</h3>
        <p>Descripción: {subject.descripcion}</p>
      </div>
    </div>
  );
};

export default SubjectCard;
