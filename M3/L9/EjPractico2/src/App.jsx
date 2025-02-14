import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/card/Card";
import Detail from "./components/Detail/Detail";

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

  const handleOnClose = () => {
    setDetail(false);
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
      {detail && <Detail handleOnClose={handleOnClose} id={id} />}
    </>
  );
}
export default App;

