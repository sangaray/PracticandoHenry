// App que pone en escucha a nuestro servidor en el puerto 3000

const app = require("./src/server");

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
