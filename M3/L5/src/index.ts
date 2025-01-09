// Pasos de Preparación del proyecto
// 1. inicializar el proyecto (npm init -y)
// 2. Crear carpeta del proyecto
// 3. Crear carpeta src
// 4. instalar las dependencias (npm install --save-dev typescript @types/express @types/node nodemon ts-node express)
// 5.Inicializar tsconfig.json (npx tsc --init)
// 6. Configurar tsconfig.json
// Las siguientes configuraciones deben estar siempre en tsconfig.json
// "target": "es6"
// "module": "commonjs"
// "outDir": "./dist"
// "rootDir": "./src"
// "strict": true
// "include": ["src/**/*.ts"], // archivos a compilar
// "exclude": ["node_modules"] // que no se va a compilar
// 7. Crear el archivo index.ts
// 8. Crear el archivo .gitignore
// 9. Crear el archivo nodemon.json
/*
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
*/
// 10. Crear el archivo .env y configurarlo con el puerto que vamos a estar trabajando.
// 11. Crear una carpeta config en src y agregar un archivo envs.ts donde van a estar todas la variables de entorno importadas de .env
// Crear el flujo: enrutador, end point, servicio, controlador.

// 12. Creamos las carpetas routes, controllers y services
// 13. Comenzamos a trabajar por routes agregando un archivo index.ts
// 14. Creamos el archivo usersController.ts
// 15. Crear el archivo userService
// 16. Crear carpeta interfaces, para crear la interface del user.
// 17. Crear la carpeta y archivo dto

// Nodemon, no suele tener problema para trabajar. Pero en casos especiales puede llegar a marearse en su seguimeinto
// ts-node, ejecuta typescript sin necesidad de buildear cada vez la aplicación
// Vamos a tener muchas dpendencias y configuraciones para trabajar, las cuales son muchas. No traten de memorizarse todo esto. Guardar todo en un block de notas.
// La base de datos debe estar creada desde antes de establecer la conexión

import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then(() => {
  console.log("Conexión a la base de datos realizada con éxito");
  server.listen(PORT, () => {
    console.log(`Server listening en port ${PORT}`);
  });
});
