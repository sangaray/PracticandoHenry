"use client";
import Button from "@/components/CustomButton/CustomButton";
import React from "react";

const ProfileView = () => {
  const handleClick = () => {
    alert("Presionado");
  };

  return (
    <div>
      <h1>Tu perfil</h1>
      <h3>Bienvenido Maximiliano</h3>
      <p>Tu correo: Maxi@gmail.com</p>
      <p>Tu dirección de envío es: Posadas, Misiones</p>
      <Button onClick={handleClick} disabled={false}>
        Desconectar
      </Button>
    </div>
  );
};

export default ProfileView;
