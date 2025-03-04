import LoginRegLinks from "../loginRegLinks/LoginRegLinks";
import LogoEmpresa from "../logoEmpesa/LogoEmpresa";
import NavLinks from "../navLinks/NavLinks";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.nav__container}>
      <LogoEmpresa />
      <NavLinks />
      <LoginRegLinks />
    </div>
  );
};

export default NavBar;
