"use client";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>My Shopping App</h1>
      </div>
    </div>
  );
};

export default Navbar;
