import React from "react";
import Logo from "./../../assets/Logo1.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo principal" />
        <p className={styles.businessName}>Desafía la Tecnología</p>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.buttonsContainer}>
          <label>About</label>
          <label>Features</label>
          <label>Pages</label>
        </div>
        <button>Learn More</button>
      </div>
    </nav>
  );
};

export default Navbar;
