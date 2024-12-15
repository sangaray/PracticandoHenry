const axios = require("axios");

// Solo ejecutar el código del formulario si estamos en la página de addMovies
if (document.getElementById("movieForm")) {
  document.getElementById("resetButton").addEventListener("click", () => {
    document.getElementById("movieForm").reset();
  });

  document
    .getElementById("movieForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const title = document.getElementById("title").value.trim();
      const year = document.getElementById("year").value.trim();
      const director = document.getElementById("director").value.trim();
      const duration = document.getElementById("duration").value.trim();
      const genre = document.getElementById("genre").value.trim();
      const genresArray = genre.split(",").map((genre) => genre.trim());
      const rate = document.getElementById("rate").value.trim();
      const poster = document.getElementById("poster").value.trim();

      if (
        !title ||
        !year ||
        !director ||
        !duration ||
        !genre ||
        !rate ||
        !poster
      ) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      // Validando el formato del año
      if (!/^\d{4}$/.test(year)) {
        alert("El año debe tener 4 dígitos.");
        return;
      }

      // Validando que la calificación esté entre 0 y 10
      if (rate < 0 || rate > 10) {
        alert("La calificación debe estar entre 0 y 10.");
        return;
      }

      const movieData = {
        title,
        year: parseInt(year),
        director,
        duration,
        genre: genresArray,
        rate: parseFloat(rate),
        poster,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/movies",
          movieData
        );
        alert("Película agregada correctamente");
        document.getElementById("movieForm").reset();
      } catch (error) {
        alert("Error al agregar la película: " + error.message);
      }
    });
}
