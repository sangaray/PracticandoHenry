const movies = [
  {
    id: 1,
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://i.pinimg.com/originals/37/f5/08/37f508a760f05f9a9d3f143dadceed2e.png",
  },
  {
    id: 2,
    title: "Star Wars: Episode IV - A new Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://i.pinimg.com/originals/fc/12/81/fc12814f7f32b766409faf48df15ddf0.jpg",
  },
  {
    id: 3,
    title: "The Lord of the Rings: The Fellowship of the King",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://image.tmdb.org/t/p/original/p6QjtBmO6U105l44U0qMDSLxT0L.jpg",
  },
];

let id = 4;

module.exports = {
  getMovies: async () => {
    return movies;
  },

  createMovie: async (name) => {
    const newMovie = {
      id,
      title,
      director,
      year,
    };
    id++;
    movies.push(newMovie);
  },
};
