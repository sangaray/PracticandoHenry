// 2. Esta aplicación la recibe las solicitudes y las envía a un router
const express = require("express");
const router = require("./routes/");
// Importamos los middlewares
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Aplicamos los middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json()); // Convierte los datos que vienen en el body a un objeto de javascript

app.use(router);

module.exports = app;
