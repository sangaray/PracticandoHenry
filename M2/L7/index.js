// Express
// Scaffolding de archivos, se refiere a la organización de carpetas y archivos para un proyecto de backend.
// Express nos permite hacer esta organización según nuestras necesidades
// Pasos:
// 1. Creamos index.js, como entry point o archivo de entrada
// 2. Creamos una carpeta src. Dentro de ella:
// 3. Creamos la carpeta de rutas, aquí van a estar los módulos que dicen donde están los end points de nuestra aplicación
// 4. Creamos la carpeta controllers,
// 5. Creamos la carpeta servicios
// Solicitud => RUTA => CONTROLADOR => SERVICIOS => Resultado
// El método listen deja al servidor en espera, escuchando lo que sucede, esperando por las peticiones.
// La callback se ejecuta después que el método listen ha realizado su trabajo

const app = require("./src/server");

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
