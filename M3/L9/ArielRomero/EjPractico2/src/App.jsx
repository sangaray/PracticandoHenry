import { useEffect, useState } from "react";
import "./App.css";
import Tarjeta from "./components/tarjeta/Tarjeta";

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((respuesta) => respuesta.json())
      .then((datos) => datos.slice(0, 10))
      .then((personajesApi) => setPersonajes(personajesApi));
  }, []);

  return (
    <>
      <h1>Harry Potter App</h1>
      {personajes.map((personaje) => (
        <Tarjeta key={personaje.id} personaje={personaje} />
      ))}
    </>
  );
}

export default App;

