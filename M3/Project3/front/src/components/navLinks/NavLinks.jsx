import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div className={styles.container}>
      <span>
        <a href="#">Inicio</a>
      </span>
      <span>
        <a href="#">Servicios</a>
      </span>
      <span>
        <a href="#">El Profe</a>
      </span>
      <span>
        <a href="#">Contacto</a>
      </span>
    </div>
  );
};

export default NavLinks;
