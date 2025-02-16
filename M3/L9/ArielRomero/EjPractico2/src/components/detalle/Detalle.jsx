const Detalle = ({ personaje, closeHandler }) => {
  return (
    <div>
      <h3>Casa: {personaje?.house || "Desconocida"}</h3>
      <h3>Fecha de Nacimiento: {personaje?.dateOfBirth}</h3>
      <h3>
        {personaje?.hogwartsStaff
          ? "Staff"
          : personaje.hogwartsStudent
          ? "Student"
          : "Other"}
      </h3>
      <button onClick={closeHandler}>Cerrar Detalle</button>
    </div>
  );
};

export default Detalle;
