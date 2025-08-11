"use client";

// IMPORTANTE SABER, QUE CUANDO NECESITAMOS INTERACTIVIDAD DEL USURARIO, USO DE ALGUNA API DE REACT, USO DE EVENTOS SÍ O SÍ TIENE QUE SER UN COMPONENTE DEL CLIENT
import React from "react";
import { useState } from "react";
import { getData } from "../severOnlyModule/getData";
const FormExample = () => {
  const [formData, setFormData] = useState({});
  getData;
  return (
    <form onSubmit={() => {}}>
      <input onChange={() => {}} />
    </form>
  );
};

export default FormExample;
