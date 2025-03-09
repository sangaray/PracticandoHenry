import { useParams } from "react-router-dom";
import subjectData from "../../helpers/subjectData";
import SubjectCard from "../../components/subjectCard/SubjectCard";

const Servicios = () => {
  const { subjectId } = useParams();
  console.log(subjectId);
  console.log(subjectData);

  const subject = subjectData.find((item) => item.id === parseInt(subjectId));

  return (
    <div>
      <h1>Servicios</h1>
      <SubjectCard />
      {subject ? (
        <SubjectCard subject={subject} />
      ) : (
        <div>
          <h2>El teme no existe</h2>
        </div>
      )}
    </div>
  );
};

export default Servicios;
