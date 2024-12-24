// El método que conociamos de exportar y requerir no funciona en TS.
// Debemos replantear nuestra forma de importar y exportar
// Al exportar nos vamos a encontrar con dos cosas
// Nos interesa exportar sólo server, lo hacemos usando export default server
// export default lo usamos solamente cuando queremos exportar una sola cosas.

import express from "express";

const server = express();

export default server;
