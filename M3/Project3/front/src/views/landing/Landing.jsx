import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1> Bienvenido/a </h1>
      <h2>¿Es tu primera vez en nuestra aplicación?</h2>
      <Link to="/register">
        <button>Registrate</button>
      </Link>
      <h2>¿Ya tiene una cuenta?</h2>
      <Link to="/login">
        <button>Ingresá</button>
      </Link>
    </div>
  );
}
