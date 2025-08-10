import React from "react";

// Llamada a una API o base de datos
const fetchCharacter = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/1");
  const character = await response.json();
  return character;
};

const Character = async () => {
  const character = await fetchCharacter();
  return (
    <div>
      <h1>Soy un server component</h1>
      <p>{JSON.stringify(character)}</p>
      <p>{character.name}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default Character;
