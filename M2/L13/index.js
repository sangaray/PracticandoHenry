// En este caso primero se va a conectar la base de datos y si todo sale bien el servidor va a escuchar en el puerto 3000
// App que pone en escucha a nuestro servidor en el puerto 3000

const app = require("./src/server");
const dbCon = require("./src/config/dbCon");
require("dotenv").config();

dbCon().then((res) => {
  app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
});
