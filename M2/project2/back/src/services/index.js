const movieService = require("./movieService");
const { getAllMovies } = require("../controllers/movieController");

module.exports = {
  getAllMovies: (req, res) => {
    const movies = movieService.getMovies();
    res.status(200).json(movies);
  },
};
