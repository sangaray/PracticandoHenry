// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/";
const apiService = axios.create({
  baseURL: API_URL,
});

export const getCharacters = async () => {
  try {
    const response = await apiService.get("character");
    return response.data;
  } catch (error) {
    throw new Error(`Error al traer personajes: ${error.message}`);
  }
};
export const getLocations = async () => {
  try {
    const response = await apiService.get("location");
    return response.data;
  } catch (error) {
    throw new Error(`Error al traer las ubicaciones: ${error.message}`);
  }
};

export const getEpisodes = async () => {
  try {
    const response = await apiService.get("episode");
    return response.data;
  } catch (error) {
    throw new Error(`Error al traer los episodios: ${error.message}`);
  }
};
