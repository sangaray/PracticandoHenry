import styles from "./NavLinks.module.css";
import { Link } from "react-router-dom";
import subjectData from "../../helpers/subjectData"; // Importar el array de datos

const NavLinks = () => {
  return (
    <div className={styles.container}>
      <span>
        <a href="#">Inicio</a>
      </span>
      <div className={styles.dropdown}>
        {" "}
        {/* Contenedor del dropdown */}
        <span>Servicios</span>
        <div className={styles.dropdownContent}>
          {" "}
          {/* Contenido del dropdown */}
          {subjectData.map((subject) => (
            <Link to={`/subject/${subject.id}`} key={subject.id}>
              <p className={styles.dropdownItem}>{subject.tema}</p>
            </Link>
          ))}
        </div>
      </div>
      <span>
        <a href="#">El Profe</a>
      </span>
      <Link to="/contact">
        <span>Contacto</span>
      </Link>
    </div>
  );
};

export default NavLinks;
