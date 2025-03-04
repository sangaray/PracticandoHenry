import React, { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const GETCHARACTERBYID_URL = "https://dragonball-api.com/api/characters/";

export default function Detail(props) {
  // const params = useParams();
  // console.log(params.id);
  const { id } = useParams();
  // console.log(id);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(GETCHARACTERBYID_URL + id)
      .then(({ data }) => data)
      .then((character) => setCharacter(character))
      .catch((error) => console.log(error.message));
  }, []);

  // Limpiamos el estado antes de desmontar el componente
  useEffect(
    () => () => {
      setCharacter({});
    },
    []
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.espaciado}>Detalle</h2>
      <br />
      <h3 className={styles.espaciado}>Nombre: {character?.name}</h3>
      {character.image ? (
        <img src={character?.image} alt={character.name} />
      ) : (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}

      <h3 className={styles.espaciado}>Ki: {character?.ki}</h3>
      <h3 className={styles.espaciado}>Raza: {character?.race}</h3>
      <hr />
    </div>
  );
}

