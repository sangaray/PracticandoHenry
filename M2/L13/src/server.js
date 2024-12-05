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

app.use(router);

module.exports = app;
