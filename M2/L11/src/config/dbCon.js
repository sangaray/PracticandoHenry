// dbCon.js realiza la conexión a la base de datos
// Connecting Mongoose
// 1. Install mongoose
// 2. Require mongoose
// 3. Connect to DB. Este es un proceso asíncrono que si no está bien hecha puede crashear la app, por lo que debemos trabajar de forma ordenada.
// Mongoose funciona a nivel de la aplicación, no importa donde lo requiera que siempre es el mismo, aunque haga distintas cosas
// 4. Exportamos la función para poder usarla en el index.js
// 5. Queremos que primero se conecte a la base de datos y después que ponga al servidor a escuchar, para eso debemos configurar nuestro index.js principal

const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnection = process.env.MONGO_URI;

const dbCon = async () => {
  // Realiza la conección a la base de datos
  await mongoose.connect(mongoConnection);
};

module.exports = dbCon;
