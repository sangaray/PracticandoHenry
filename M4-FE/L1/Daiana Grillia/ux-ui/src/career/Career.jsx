// vendors
import React from "react";

// components
import Images from "./components/images/Images";
import Values from "./components/values/Values";

// styles
import styles from "./Career.module.css";

const Career = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 style={{ marginBottom: "20px" }}>Career</h2>
        <div className={styles.subContainer}>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
          <button>Browse Open Positions</button>
        </div>
      </div>
      <br />
      <Images />
      <br />
      <Values />
    </>
  );
};

export default Career;
