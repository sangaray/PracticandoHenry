import React from "react";
import SubjectCard from "../../components/subjectCard/SubjectCard";
import { useParams } from "react-router-dom";
import subjectData from "../../helpers/subjectData";

const Servicios = () => {
  const { serviciosId } = useParams(); // Obtener el id del tema desde la URL

  const subject = subjectData.find((item) => item.id === Number(serviciosId));

  if (!subject) {
    return <div>Tema no encontrado</div>;
  }

  return (
    <div>
      <SubjectCard subject={subject} />
    </div>
  );
};

export default Servicios;
