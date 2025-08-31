"use client";
import styles from "./Navbar.module.css";

const Navbar = ({ token, setToken }) => {
  const logOutHandler = () => {
    setToken(null);
    localStorage.clear();
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>My Shopping App</h1>
      </div>
      <div>
        {token ? (
          <button className={styles.boton} onClick={logOutHandler}>
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
