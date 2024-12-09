// Definir la clase Movie para asegurar la integridad de los datos
/*class Movie {
  constructor(id, title, director, year, duration, genre, rate, poster) {
    // Verificamos que las propiedades requeridas estén presentes
    if (!title || !poster || !director) {
      throw new Error("Faltan datos obligatorios: title, poster o director.");
    }

    this.id = id;
    this.title = title;
    this.director = director;
    this.year = year;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

let movies = [
  new Movie(
    1,
    "Guardians of the Galaxy Vol. 2",
    "James Gunn",
    2017,
    "2h 16min",
    ["Action", "Adventure", "Comedy"],
    7.7,
    "https://i.pinimg.com/originals/37/f5/08/37f508a760f05f9a9d3f143dadceed2e.png"
  ),
  new Movie(
    2,
    "Star Wars: Episode IV - A new Hope",
    "George Lucas",
    1977,
    "2h 1min",
    ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    8.7,
    "https://i.pinimg.com/originals/fc/12/81/fc12814f7f32b766409faf48df15ddf0.jpg"
  ),
  new Movie(
    3,
    "The Lord of the Rings: The Fellowship of the Ring",
    "Peter Jackson",
    2001,
    "2h 58min",
    ["Action", "Adventure", "Drama", "Fantasy"],
    8.8,
    "https://image.tmdb.org/t/p/original/p6QjtBmO6U105l44U0qMDSLxT0L.jpg"
  ),
];

let id = 4;*/

const Movie = require("../models/Movie");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      return console.log(error);
    }
  },

  // Crear una nueva película asegurando que sea una instancia de la clase Movie
  createMovie: async (movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
  },
};
