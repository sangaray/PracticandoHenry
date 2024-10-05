// En este módulo hacer la conexión a la base de datos en una FUNCIÓN
// Exportar esta función

const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnection = process.env.MONGO_URI;

const dbCon = async () => {
  // Acá hacemos la conexión a la BDD con la URL que nos da mongoDB
  await mongoose.connect(mongoConnection);
};

module.exports = dbCon;
