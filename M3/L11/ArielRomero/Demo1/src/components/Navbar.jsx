import React from "react";
import styles from "../styles/styles.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className={styles.navbarContainer}>
      <img
        src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
        alt="logo"
      />
      <p>Dragon Ball API</p>
      {/* -----  */}
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : null)}
        to="/home">
        <span>Personajes</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : null)}
        to="/about">
        <span>Sobre la APP</span>
      </NavLink>
    </div>
  );
}

