const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  year: Number,
  duration: String,
  genre: String,
  rate: Number,
  poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
