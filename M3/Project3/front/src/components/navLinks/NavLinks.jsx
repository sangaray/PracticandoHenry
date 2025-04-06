import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
import subjectData from "../../helpers/subjectData";
import { useSelector, useDispatch } from "react-redux";
import AppointmentForm from "../../views/appointmentForm/AppointmentForm";

const NavLinks = () => {
  const login = useSelector((state) => state.actualUser.userData.login);
  console.log(login);

  const dispatch = useDispatch();

  const handleLogout = () => {
    const confirmed = window.confirm(
      "¿Estás seguro que quieres cerrar sesión?"
    );
    if (confirmed) {
      dispatch({ setUserData: { login: false, user: {} } });
    }
  };
  return (
    <div className={styles.container}>
      <Link to="/home">
        <span>Inicio</span>
      </Link>

      <div className={styles.dropdown}>
        <span>Servicios</span>

        <div className={styles.dropdownContent}>
          {subjectData.map((subject) => (
            <Link to={`/subject/${subject.id}`} key={subject.id}>
              <p className={styles.dropdownItem}>{subject.tema}</p>
            </Link>
          ))}
        </div>
      </div>

      {login && (
        <Link to="/appointments">
          <span>Reservas</span>
        </Link>
      )}

      {login && (
        <Link to="/appointmentForm">
          <span>Reservar</span>
        </Link>
      )}

      <Link to="/about">
        <span>El Profe</span>
      </Link>
      <Link to="/contact">
        <span>Contacto</span>
      </Link>

      {login ? (
        <Link to="/">
          <span onClick={handleLogout}>Salir</span>
        </Link>
      ) : (
        <Link to="/">
          <span>Ingresar</span>
        </Link>
      )}
    </div>
  );
};

export default NavLinks;
