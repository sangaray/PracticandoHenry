import { useState, useEffect } from "react";
import { getCharacters } from "../services/apiService";
export default function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Cuando se monta el hook => petición
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (endpoint === "character") {
          const characters = await getCharacters();
          setData(characters);
        } else if (endpoint === "locations") {
          const locations = await getLocations();
          setData(locations);
        } else if (endpoint === "episodes") {
          const episodes = await getEpisodes();
          setData(episodes);
        }
      } catch (error) {
        setError(error);
        console.log("Error en useFetch:", error);
      }
    };
    fetchData();
  }, [endpoint]);
  return { data, error };
}
