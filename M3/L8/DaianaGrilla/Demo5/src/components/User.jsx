// Tengo que saber el perfil se está actualizando o si ya se actualizó
// Para crear un evento necesitan un manejador de evento, y siempre empieza con handleNombreEvento

import { useState } from "react";

const User = ({ handleUserButtonClick }) => {
  const [updateData, setUpdateData] = useState("Editando...");

  const handleUpdateData = () => {
    setUpdateData("Actualizado");
    handleUserButtonClick("Se actualizó el perfil");
  };

  return (
    <div>
      <button onClick={handleUpdateData}>Actualizar perfil</button>
      <p>Estado del perfil: {updateData}</p>
    </div>
  );
};

export default User;
