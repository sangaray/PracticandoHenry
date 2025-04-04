import styles from "../styles/styles.module.css";
import Card from "../components/Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
// Traer todos los personajes:
// const GETALLCHARACTERS_URL = "https://dragonball-api.com/api/characters";
const GETALLCHARACTERS_URL =
  "https://dragonball-api.com/api/characters?page=1&limit=5";

export default function Home(props) {
  const [allCharacters, setAllCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(GETALLCHARACTERS_URL)
      .then(({ data }) => data.items)
      .then((charactersAPI) => setAllCharacters(charactersAPI))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className={styles.container}>
      <h2>Personajes</h2>
      <hr />
      {allCharacters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

