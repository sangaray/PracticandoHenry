// "https://students-api.up.railway.app/movies"

// Async / Await
// Hay muchas posibilidades para el resultado, lo que lo hace incierto, esto está representado por la promesa
// Async / Await es una forma de enmascarar a las promesas, una estrategia más cómoda desde la sintaxis
// Va a esperar no importa lo que demore la resolución, la función se pausa a esperar a que todo se resuelva. Después de que se resolvió si tengo un valor se guarda en la variable
// await tiene sentido unicamente dentro de una función async
// Try, guarda lo que sucede si la promesa se resuelve correctamente. Trato de hacer esto, pero si hay un error instantáneamente saltamos al catch.
// Catch, guarda lo que suecede si no se resuelve correctamente, si se rechaza.
// En un bloque try cuando hay un error todo lo que haya después del error no se ejecuta
// Se queda esperando hasta que se resuelva la promesa y recién después continúa ejecutando el código
// En términos de sintaxis es bueno, ordenado, puedo esperar, pero si no puedo esperar o tengo muchas funciones asincronas, esto demora la ejecución del código y será más interesante utilizar promesas

const axios = require("axios");

const fetchMovies = async () => {
  try {
    console.log("Estamos por INTENTAR un par de operaciones");
    const data = await axios.get("https://students-api.up.railway.app/movies");
    const movies = data.data;
    console.log(data.data);
    console.log("Ha finalizado todo con éxito");
  } catch (err) {
    console.log("Tuvimos un error. Estamos en el bloque catch");
    console.log(err.message);
  }
};

fetchMovies();
