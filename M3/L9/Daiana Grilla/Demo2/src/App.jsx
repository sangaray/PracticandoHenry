import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/card/Card";

function App() {
  const [characters, setCharacters] = useState([]);
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState(0);
  console.log(detail);
  console.log(id);

  const handlerOnClick = (id) => {
    setId(id);
    setDetail(true);
  };

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);

  return (
    <>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            character={character}
            handlerOnClick={handlerOnClick}
          />
        );
      })}
    </>
  );
}
export default App;

