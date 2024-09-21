// Importando el array de datos
// import { template } from "./tempData.js";

// Obtener el contenedor donde se agregarán las cards
const renderAllMovies = require("./renderAllMovies");

const apiUrl = "https://students-api.up.railway.app/movies";

$.get(apiUrl, (data) => {
  console.log(data);
  renderAllMovies(data);
});
