function createMovieCard(movie) {
  const { title, year, director, duration, genre, rate, poster } = movie;

  // creando los elementos de la card
  const titleElement = document.createElement("h2");
  const yearElement = document.createElement("p");
  const directorElement = document.createElement("h3");
  const durationElement = document.createElement("p");
  const genreElement = document.createElement("p");
  const rateElement = document.createElement("p");
  const posterElement = document.createElement("img");

  // Asignando contenido a los elementos de la card
  titleElement.innerHTML = title;
  yearElement.innerHTML = `Year: ${year}`;
  directorElement.innerHTML = `Director: ${director}`;
  durationElement.innerHTML = `Duration: ${duration}`;
  genreElement.innerHTML = `Genre: ${genre.join(", ")}`; // convertir el array de géneros en string
  rateElement.innerHTML = `Rating: ${rate}`;
  posterElement.src = poster || "default-image.jpg"; // Si no hay poster, usa una imagen por defecto

  // Asignando las clases a los elementos de la card
  titleElement.classList.add("movieTitle");
  yearElement.classList.add("movieYear");
  directorElement.classList.add("movieDirector");
  durationElement.classList.add("movieDuration");
  genreElement.classList.add("movieGenre");
  rateElement.classList.add("movieRate");
  posterElement.classList.add("moviePoster");

  // Creando el div para la card
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("movieCard");

  cardDiv.appendChild(titleElement);
  cardDiv.appendChild(posterElement);
  cardDiv.appendChild(directorElement);
  cardDiv.appendChild(yearElement);
  cardDiv.appendChild(durationElement);
  cardDiv.appendChild(genreElement);
  cardDiv.appendChild(rateElement);

  return cardDiv;
}

module.exports = createMovieCard;
