// vendors
import React from "react";

// styles
import styles from "./Career.module.css";

const Career = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Career</h2>
        <div className={styles.subContainer}>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
          <button>Browse Open Positions</button>
        </div>
      </div>
    </>
  );
};

export default Career;
