import "./Detail.css";
import { useState, useEffect } from "react";

const Detail = ({ id, handleOnClose }) => {
  const [character, setCharacter] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://hp-api.onrender.com/api/character/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setCharacter(data[0]))
        .catch((error) => {
          console.error("Error fetching character:", error);
          setError(error);
        });
    }
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="modalDetail">
      <>
        <h2>{character?.name}</h2>
        <h3>{character?.dateOfBirth}</h3>
        <h3>{character?.ancestry}</h3>
      </>
      <img
        style={{ borderRadius: "100%", width: "200px" }}
        src={character?.image}
        alt={character?.name}
      />
      <br />
      <button className="buttonDetail" onClick={handleOnClose}>
        Cerrar
      </button>
    </div>
  );
};

export default Detail;
