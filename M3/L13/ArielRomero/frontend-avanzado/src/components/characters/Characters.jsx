import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Character.module.css";

const URL = "https://rickandmortyapi.com/api/character";

export default function Characters() {
  const { data, error } = useFetch("character"); // Cambio URL por character
  // const { data, error } = useFetch("episode");
  // const { data, error } = useFetch("location");

  console.log("Data recibida:", data);
  console.log("Error recibido:", error);

  return (
    <div>
      <h2>Listado de Personajes</h2>
      {/* Mapeo de data */}
      {data ? (
        data.results.map((character) => (
          <div key={character.id} className={styles.char}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
          </div>
        ))
      ) : (
        <div>
          <p>{error?.message}</p>
        </div>
      )}
    </div>
  );
}
