"use client";

import { useState } from "react";
import styles from "./AuthForm.module.css";
const AuthForm = ({ token, setToken }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // alert(`Username: ${userData.username}, Password: ${userData.password}`);

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setToken(json.token);
        localStorage.setItem("userToken", json.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles.inputContainer}>
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            type="text"
            required
            onChange={inputHandler}
            value={userData.username}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            type="password"
            required
            onChange={inputHandler}
            value={userData.password}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.boton}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
