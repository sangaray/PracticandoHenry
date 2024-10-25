// si uso esta forma const mongoose = require ("mongoose"); tengo que usar luego mongoose.Schema y mongoose.model
// si uso esta forma const { Schema, model } = require ("mongoose"); puedo usar directamente Schema y model
// Validación para Year: Se puede poner un mensaje de error en las restricciones usando un array, por ejemplo: min: [1895, "No hay películas antes de 1895"] o max: [new Date().getFullYear() + 2, "El año ingresado debe ser igual o menor al año actual + 2"]
/* Validación para rate: type: Number,
    max:  10,
    min: 0,
*/
// Validación para duration: ^\d{1,2}h \d{1,2}min$
/* Validación para poster {
    type: String,
    validate: {
      validator: (v) => {
        const urlRegex = /^(https?:\/\/.*\.(?:jpg|jpeg|png|gif|webp))$/i;
        return urlRegex.test(v);
      },
      message: "El link del poster debe incluir https:// o el formato debe ser jpg, jpeg, png, gif o webp",
    },
  },
}); */

const { Schema, model } = require("mongoose");

// Schema
const movieSchema = new Schema({
  title: String,
  year: {
    type: Number,
    min: 1895,
    max: new Date().getFullYear() + 2,
  },
  director: String,
  duration: String,
  genre: [String],
  rating: Number,
  poster: String,
});

// Model
const Movie = model("Movie", movieSchema);

module.exports = Movie;
