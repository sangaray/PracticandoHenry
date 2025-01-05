import cors from "cors";
import express from "express";
import morgan from "morgan";
import indexRouter from "./routes/indexRouter";

const server = express();

server.use(cors()); // desde que métodos voy a dejar que se ejecuten, desde qué url, qué header, así es para todo tipo de peticiones
server.use(morgan("dev")); // dev = desarrollo
server.use(express.json()); // para que el servidor entienda los json que le llegan por body
server.use(indexRouter);

server.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

export default server;
