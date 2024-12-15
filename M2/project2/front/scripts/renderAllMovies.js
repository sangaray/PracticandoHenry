const createMovieCard = require("./createMovieCard");

const cardsContainer = document.getElementById("cardsContainer");

function renderAllMovies(data) {
  // Seleccionado el contenedor de las cards
  cardsContainer.innerHTML = ""; // Limpia el contenedor antes de agregar nuevas cards

  // Usar el array `template` directamente
  data.forEach((movie) => {
    const card = createMovieCard(movie);
    cardsContainer?.appendChild(card); // Agregar la card al contenedor
  });

  console.log("Todas las tarjetas renderizadas correctamente");
}

module.exports = renderAllMovies;
