// M2-L13 - Utils y Helpers

const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
  /* Se crea una referencia a la colección de vehicles usando el ObjectId como referencia de esta manera me aseguro que va a tener una referencia al vehículo asociado a ese usuario*/
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
