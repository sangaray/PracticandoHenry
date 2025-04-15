import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectSubjects } from "../../redux/subjectSlice";
import { setUserData } from "../../redux/userSlice";

const NavLinks = () => {
  const login = useSelector((state) => state.actualUser.userData.login);
  console.log(login);
  const subjects = useSelector(selectSubjects);

  const dispatch = useDispatch();

  const handleLogout = () => {
    const confirmed = window.confirm(
      "¿Estás seguro que quieres cerrar sesión?"
    );
    if (confirmed) {
      console.log("Cerrando sesión...");

      dispatch(setUserData({ login: false, user: {} })); // ✅ Corrección aquí
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
          {/* Generar dinámicamente los enlaces para cada subject */}
          {subjects.map((subject) => (
            <Link to={`/servicios/${subject.id}`} key={subject.id}>
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
