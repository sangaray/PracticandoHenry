// Recordar que la aplicación de backend y la de front end son dos aplicaciones separadas. Van a estar comunicadas pero son dos aplicaciones separadas.

const app = require("./src/server");

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
