// vendors
import React from "react";

// styles
import styles from "./Images.module.css";
const Images = () => {
  return (
    <div className={styles.container}>
      <img src="/public/Foto1.png" alt="Foto1" />
      <img src="/public/Foto2.png" alt="Foto2" />
    </div>
  );
};

export default Images;
