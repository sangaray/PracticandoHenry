// Schemas y Models
// Schema, es la estructura del documento que queremos crear para dar coherencia a nuestros datos
// Pasamos un objeto donde las propiedades son el nombre de los atributos y el valor son los tipos de datos con los que vamos a trabajar, esos valores van en mayúsculas
// El model se pide el nombre y el nombre del schema, es la representación de la colección que teno en mongoDB
// Los servicios son los que van a interactuar con los models.
// MongoDB va a crear una colección con el nombre del model en plural y minúsculas

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
