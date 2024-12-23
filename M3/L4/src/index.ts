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

import { log } from "console";

// Nodemon, no suele tener problema para trabajar. Pero en casos especiales puede llegar a marearse en su seguimeinto
// ts-node, ejecuta typescript sin necesidad de buildear cada vez la aplicación
// Vamos a tener muchas dpendencias y configuraciones para trabajar, las cuales son muchas. No traten de memorizarse todo esto. Guardar todo en un block de notas.

const express = require("express");
const server = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  log(`Server listening on port ${PORT}`);
});
