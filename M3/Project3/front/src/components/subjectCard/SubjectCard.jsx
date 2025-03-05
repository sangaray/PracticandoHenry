import math from "../../assets/Matematica.jpg";
import React from "react";
import styles from "./SubjectCard.module.css";

const SubjectCard = ({ subject }) => {
  return (
    <div className={styles.container}>
      <img src={subject?.imagen} alt={subject.tema} />
      <div className={styles.subjectInfo}>
        <h2>{subject?.tema}</h2>
        <p>{subject?.descripcion}</p>
      </div>
    </div>
  );
};

export default SubjectCard;
