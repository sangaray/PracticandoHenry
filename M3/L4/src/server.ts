// El método que conociamos de exportar y requerir no funciona en TS.
// Debemos replantear nuestra forma de importar y exportar
// Al exportar nos vamos a encontrar con dos cosas
// Nos interesa exportar sólo server, lo hacemos usando export default server
// export default lo usamos solamente cuando queremos exportar una sola cosas.
// Cuando llamo a index en una carpeta se considera que es lo principal, por lo que no necesito indicar el archivo también es suficiente poner la carpeta

import express from "express";
import router from "./routes";

const server = express();

server.use(router);

export default server;
