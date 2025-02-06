import "./App.css";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([
    { id: 1, name: "Hary Potter", house: "Gryffindor" },
    { id: 2, name: "Draco Malfoy", house: "Slytherin" },
  ]);

  const addCharacter = () => {
    setCharacters([
      ...characters,
      { id: 3, name: "Hermione Granger", house: "Gryffindor" },
    ]);
  };

  const modifyName = () => {
    characters[0].name = "Harry Potter";
    setCharacters([...characters]);
  };

  return (
    <>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <h3>{character.house}</h3>
          </div>
        );
      })}
      <button onClick={addCharacter}>Agregar Personaje</button>
      <button onClick={modifyName}>Corregir Nombre</button>
    </>
  );
}

export default App;

