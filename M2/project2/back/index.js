// Recordar que la aplicación de backend y la de front end son dos aplicaciones separadas. Van a estar comunicadas pero son dos aplicaciones separadas.
// 1. Este es el entry point a la aplicaciín, que recibe la instacia de express y la pone en el servidor en el puerto 3000

const app = require("./src/server");
const conDB = require("./src/config/conDb");
require("dotenv").config();
const { PORT } = process.env;

conDB()
  .then((res) => {
    app.listen(PORT, () => {
      console.log("Servidor escuchando en el puerto", PORT);
    });
  })
  .catch((err) => {
    console.log("Error al conectar con la DB", err);
  });
