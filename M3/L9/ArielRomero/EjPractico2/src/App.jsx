import { useEffect, useState } from "react";
import "./App.css";
import Tarjeta from "./components/tarjeta/Tarjeta";
import Detalle from "./components/detalle/Detalle";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((respuesta) => respuesta.json())
      .then((datos) => datos.slice(0, 10))
      .then((personajesApi) => setPersonajes(personajesApi));
  }, []);

  const clickHandler = (id) => {
    setId(id);
    setDetail(true);
  };

  const closeHandler = () => {
    setDetail(false);
  };

  return (
    <>
      <h1>Harry Potter App</h1>
      {personajes.map((personaje) => (
        <Tarjeta
          key={personaje.id}
          personaje={personaje}
          clickHandler={clickHandler}
        />
      ))}
      {detail ? <Detalle id={id} closeHandler={closeHandler} /> : null}
    </>
  );
}

export default App;

