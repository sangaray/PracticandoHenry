import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
import subjectData from "../../helpers/subjectData";

const NavLinks = () => {
  return (
    <div className={styles.container}>
      <Link to="/home">
        <span>Inicio</span>
      </Link>

      <div className={styles.dropdown}>
        <span>Servicios</span>

        <div className={styles.dropdownContent}>
          {subjectData.map((subject) => (
            <Link to={`/subject/${subject.id}`} key={subject.id}>
              <p className={styles.dropdownItem}>{subject.tema}</p>
            </Link>
          ))}
        </div>
      </div>
      <Link to="/appointments">
        <span>Reservas</span>
      </Link>
      <Link to="/about">
        <span>El Profe</span>
      </Link>
      <Link to="/contact">
        <span>Contacto</span>
      </Link>
    </div>
  );
};

export default NavLinks;
