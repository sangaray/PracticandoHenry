import styles from "./NavLinks.module.css";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className={styles.container}>
      <span>
        <a href="#">Inicio</a>
      </span>
      <Link to="/servicios">
        <span>Servicios</span>
      </Link>
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
