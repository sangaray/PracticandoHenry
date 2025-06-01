import React from "react";
const Saludador: React.FC<{
  children: React.ReactElement;
  name: string;
}> = ({ name, children }): React.ReactElement => {
  return (
    <>
      <h1>¡Hola, {name}!</h1>
      {children}
    </>
  );
};

export default Saludador;
