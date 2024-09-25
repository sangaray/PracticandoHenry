// Otras Operaciones Asincronas
// No sólo el factor tiempo indica asincronía
// fs es una librería que tiene funciones que nos permiten maniputal archivos del sitema
// fs, pide archivo y espera una callback para ejecutra un proceso cuando termine, y el error. Esta es un función asíncrona, da incertidumbre no saber si está el archivo, que tipo de archvio es, si tiene o no contenido, no sabe con qué se va a encontra cuando busque el archvo
// El asincronismo no tiene que ver con el tiempo que tarda, sino con el nivel de incertidumbre a la hora de ir a buscar la información

const fs = require("fs");

fs.readFile("./mi_archivo.txt", "utf-8", (err, data) => {
  if (err) console.log(err.message);
  else console.log(data);
});
