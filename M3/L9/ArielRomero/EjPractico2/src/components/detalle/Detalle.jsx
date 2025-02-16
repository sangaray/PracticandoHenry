import { useEffect, useState } from "react";

const Detalle = ({ id, closeHandler }) => {
  const [detallePersonaje, setDetallePersonaje] = useState({});

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => datos[0])
      .then((personaje) => setDetallePersonaje(personaje));
  }, [id]);

  return (
    <div>
      <h3>Casa: {detallePersonaje?.house}</h3>
      <h3>Fecha de Nacimiento: {detallePersonaje?.dateOfBirth}</h3>
      <h3>
        {detallePersonaje?.hogwartsStaff
          ? "Staff"
          : detallePersonaje.hogwartsStudent
          ? "Student"
          : "Other"}
      </h3>
      <button onClick={closeHandler}>Cerrar Detalle</button>
    </div>
  );
};

export default Detalle;
