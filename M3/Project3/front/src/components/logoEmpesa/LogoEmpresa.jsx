import logoEmpresa from "../../assets/Logo-Claro.png";
import styles from "./LogoEmoresa.module.css";
const LogoEmpresa = () => {
  return (
    <div className={styles.container}>
      <img src={logoEmpresa} alt="" />
    </div>
  );
};

export default LogoEmpresa;
