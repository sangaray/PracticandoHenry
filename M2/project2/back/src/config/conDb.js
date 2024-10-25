// En este módulo hacer la base de datos en una función
// Exportar esta función.
require("dotenv").config();
const { MONGO_URI } = process.env;
const mongoose = require("mongoose");

const conDB = async () => {
  // Acá hacemos la conexión a la DB con la URI que nos da mongoDB
  // Usamos la URI
  try {
    await mongoose.connect(MONGO_URI);
    // console.log(process.env.MONGO_URI);
    console.log("Conexión exitosa con la DB");
  } catch (error) {
    console.log("Error al conectar con la DB");
  }
};

module.exports = conDB;
