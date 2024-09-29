// 2. Esta aplicación la recibe las solicitudes y las envía a un router

// Middlewares, son funciones que se colocan en el medio, entre la recepción de la solicitud y el enrutador, recibe la solicitud, (el objeto req), hace algo con la solicitud y luego la libera para que continúe su camino.

// Morgan, es un middleware pre-armado, totalmente implementado y con las funcionalidades pulidas.
// Antes de enviar la solicitud al enrutador quiero usar Morgan,
// Morga se encarga de mostrar en consoloa el tipo de request, la ruta y el resultado, código, con lo que trabajó la petición.
// use significa que quiero que la solicitud para por ahí, por lo que indique el use.
// cors, permite de qué manera y con quienes se quiere comunicar mi servidor. Quiero que mi aplicación sólo pueda comunicarse con mi servidor y no con otras aplicaciones
// Aquí la solicitud pasa por los tres middlewares y se libera para que siga su camino

const express = require("express");
const router = require("./routes/");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Acá quiero utilizar el middleware Morgan. Tengo una función preparada para hacer algo, y liberarla para que continue su camino
app.use(morgan("dev"));

// Acá utilizo cors, esto indica que mi servidor está abierto abierto a recibir solicitudes, esto por las dudas cada vez que lllega de otro lado no recibe la solicitud
app.use(cors());

// Acá usamos express.json, permite convertir objetos jsons en objetos de javascript.
app.use(express.json());

// Este es mi middleware. Si no uso next, no sabe que tiene que dejar a la request continuar su camino. Siempre que creo un middleware personalizado tengo que sí o sí poner next al final
app.use((res, req, next) => {
  console.log("Estamos pasando por mi propio middleware");
  next();
});

app.use(router);

module.exports = app;
