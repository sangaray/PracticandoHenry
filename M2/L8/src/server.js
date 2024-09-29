// 2. Esta aplicación la recibe las solicitudes y las envía a un router

const express = require("express");
const router = require("./routes/");

const app = express();

app.use(router);

module.exports = app;
