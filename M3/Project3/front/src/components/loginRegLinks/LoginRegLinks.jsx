import React from "react";
import styles from "./LoginRegLinks.module.css";
import { Link } from "react-router-dom";

const LoginRegLinks = () => {
  return (
    <div className={styles.container}>
      <Link to="/register">
        <span>Register</span>
      </Link>
      <Link to="/login">
        <span>Login</span>
      </Link>
    </div>
  );
};

export default LoginRegLinks;
