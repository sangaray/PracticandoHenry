const Card = ({ character, handlerOnClick }) => {
  const { name, house, id, hogwartsStaff, hogwartsStudent } = character;

  return (
    <div>
      <h2>{name}</h2>
      <h3>{house}</h3>
      <h3>{hogwartsStaff ? "Staff" : hogwartsStudent ? "Student" : "Other"}</h3>
      <button onClick={() => handlerOnClick(id)}>Ver Detalle</button>
    </div>
  );
};

export default Card;
