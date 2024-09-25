// Importando el array de datos
// import { template } from "./tempData.js";

// Obtener el contenedor donde se agregarán las cards
// vamos a cambiar la petición jquery por una petición con axios
// $.get(apiUrl, (data) => {
//console.log(data);
//renderAllMovies(data);
//});
const axios = require("axios");
const renderAllMovies = require("./renderAllMovies");

const apiUrl = "https://students-api.up.railway.app/movies";

const fetchData = async () => {
  try {
    const data = await axios.get(apiUrl);
    renderAllMovies(data.data);
  } catch (err) {
    console.log(err.message);
  }
};

fetchData();
