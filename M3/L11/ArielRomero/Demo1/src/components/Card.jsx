import React from "react";
import styles from "../styles/styles.module.css";
import { Link } from "react-router-dom";

export default function Card({ character }) {
  // console.log(character.id);
  return (
    <div className={styles.cardContainer}>
      <Link to={`/detail/${character.id}`}>
        <h3>{character.name}</h3>
      </Link>
    </div>
  );
}

