// En este proyecto tenemos, quiero modularizar tengo que tener todos los scripts, todos los módulos en el index.html y además tienen que estar en el orden en que son llamados después desde index.js.
// Aún cuando use el modlule.exports y el require, la información no va a pasar al navegador, porque estas opciones sólo sirven para node, no para el navegador. El navegador no entiende node, sólo entiende javascript.
// Bandler, tenemos el index.js que requiere de renderCards y así sucesivamente. Permite ingresando por el enterpoint va a seguir la secuencia de llamadas de los módulos y convierte todo lo que va encontrando en un único módulo que es el que se envía al navegador
// Entre los bandles que hay, tenemos uno que se llama Webpack. npm install -D webpack webpack-cli
// Le tengo que dar el entrypoing. Propiedades de configuracion, entry punto de entrada, output donde guarda el contenido y ouput, lugar y nombre del archivo que se va a crear
// Una vez creado el bundles, cada vez que realice un cambio en cualquira de los archivos de mi proyecto se debe ejecutar nuevamente webpack con nmp run build

// Importando el array de datos
// import { template } from "./tempData.js";
const renderAllMovies = require("./scripts/renderAllCards.js");

const apiUrl = "https://students-api.up.railway.app/movies";

$.get(apiUrl, (data) => {
  console.log(data);
  renderAllMovies(data);
});
