// Servidor con los Middlewares que utilizamos

const express = require("express");
const router = require("./routes/");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

/* Con esto estoy forzando un error intencional. Expres puede manejar errores síncronos de manera automática y la aplicación continúa funcionando. 
app.use((req, res) => {
  throw Error("Un error forzado en el middleware");
});
Si el error es asíncrono, express no lo puede majerar por sí misma, por eso la aplicación deja de funcionar.
*/

app.use(router);

module.exports = app;
