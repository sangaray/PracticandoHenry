import { useState, useEffect } from "react";

// Codeium: Refactor | Explain | Generate JSDoc | X
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Codeium: Refactor | Explain | Generate JSDoc | X
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`Request failed with status code ${response.status}`);
        }

        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
  };
};
