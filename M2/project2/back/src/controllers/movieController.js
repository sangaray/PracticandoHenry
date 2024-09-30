const movieService = require("../services/movieService");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await movieService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  createMovie: async (req, res) => {
    const { title, director, year, duration, genre, rate, poster } = req.body;

    try {
      await movieService.createMovie(
        title,
        director,
        year,
        duration,
        genre,
        rate,
        poster
      );
      res.status(201).json({ message: "Película creada correctamente" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
