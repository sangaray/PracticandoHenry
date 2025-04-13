import React, { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Cuando se monta el hook => petición
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const responseBody = await response.json();

        if (!response.ok) {
          throw new Error(`Error en la solicitud, status ${response.status}`);
        }
        setData(responseBody);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { data, error };
}
