// Axios
// Es una librería muy sencilla de manejar, de trabajar, sobre todo combinandola con estas estrategias, nos va a facilitar las solicitudes
// instalacion: npm install axios, se instala como dependencia del proyecto, no de desarrollo
// Se requiere donde se va a utilizar: const axios = require("axios");
// Nos permite realizar peticiones de tipo get, siempre cualquiera de los métodos de axios me va a retornar una promesa, siempre, siempre, siempre.
// Cuando axios realiza una solicitud y tiene un resultado favorable, con status 200 o 300, se logró, esta promesa de axios automáticamente resuelve la promesa
// Cuando realiza una solicitud y no obtiene un resultado favorable, rechaza la promesa y arroja un error
// Estos tres puntos son sagrados, siempre tenerlos en mente.

const axios = require("axios");

console.log(axios.get("https://students-api.up.railway.app/movies"));

// Hay otros métodos: vamos a tener un argumento de más o uno de menos, pero siempre debemos tener en cuenta los tres puntos anteriores
// ! IMPORTANTE PARA LOS MÉTODOS POST!

axios.post("https://students-api.up.railway.app/movies", {
  title: "Lo que el viento se llevó",
  year: "XXXX"
})

axios.put("URL", {"objeto con propiedades"})

axios.delete("URL")