import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <h1>
        {" "}
        Bienvenido/a a
        <br />
        Daniel El Profe{" "}
      </h1>
      <h2>¿Es tu primera vez en nuestra aplicación?</h2>
      <Link to="/register">
        <button className={styles.buttonSubmit}>Registrate</button>
      </Link>
      <h2>¿Ya tiene una cuenta?</h2>
      <Link to="/login">
        <button className={styles.buttonSubmit}>Ingresá</button>
      </Link>
      <h2>¿Querés saber de que se trata nuestra app?</h2>
      <Link to="/home">
        <button className={styles.buttonSubmit}>Invitado</button>
      </Link>
    </div>
  );
}
