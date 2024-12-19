"use strict";
// M3-L1 - Configuración y Entorno
// Typescript no puede ejecutarse directamente por node ni por el navegador, primero debe ser traducido a javascript.
// tsc - convierte archivos .ts a .js
// tsc --init - crea un archivo tsconfig.json
// para ejecutar tsc localmente se debe usar npx tsc
// para todos los proyectos de typescript siempre vamos a tener tsconfig.json y package.json
// dentro de tsconfig desomentar outdir y agregar dist como directorio de salida
// tsc compila todos los archivos .ts que encuentra, si quiero que solo se enfoque en el index debo agregar al final del tsconfig una propiedad llamada "files": ["index.ts"]
const num1 = 5;
const num2 = 10;
/* const sumar = (a, b) => a + b;

console.log(sumar(num1, num2)); */
