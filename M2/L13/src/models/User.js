// Schemas y Models
// Por convención el archivo model lleva el nombre en mayúscular y en singular
// Schema, es la estructura del documento que queremos crear para dar coherencia a nuestros datos
// Tipo de datos van en mayúsculas porque hacemos referencia alos prototipos de esos objetos
// Pasamos un objeto donde las propiedades son el nombre de los atributos y el valor son los tipos de datos con los que vamos a trabajar, esos valores van en mayúsculas
// El model se pide el nombre y el nombre del schema, es la representación de la colección que teno en mongoDB
// Los servicios son los que van a interactuar con los models.
// MongoDB va a crear una colección con el nombre del model en plural y minúsculas

const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  /* Se crea una referencia a la colección de vehicles usando el ObjectId como referencia de esta manera me aseguro que va a tener una referencia al vehículo asociado a ese usuario*/
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
