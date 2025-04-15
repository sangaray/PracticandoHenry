import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSubjects } from "../../redux/subjectSlice";
import SubjectCard from "../../components/subjectCard/SubjectCard";

const Servicios = () => {
  const { subjectId } = useParams();
  // console.log("Subject ID desde la URL:", subjectId);

  const subjects = useSelector(selectSubjects); // Obtener los subjects desde Redux
  // console.log("Subjects desde Redux:", subjects);
  console.log(subjects[0].imagen);

  const subject = subjects.find((item) => item.id === Number(subjectId));

  // console.log("Subject encontrado:", subject);

  return (
    <div>
      <h1>Servicios</h1>
      {subject ? (
        <SubjectCard subject={subject} />
      ) : (
        <div>
          <h2>El tema no existe</h2>
        </div>
      )}
    </div>
  );
};

export default Servicios;
