// M2-L5 - Testing Advanced
// Jest, lo instalamos como dependencia de desarrollo
// M2-L5 - Testing Avanzado
// Para instalar una dependencia de desarrollo ponemos -D delante del nombre de la dependencia
// Ya tiene especificada la configuración para que busque los archivos de tests, esto lo trae por defecto. No necesito indicarle donde se encuentran los módulos de tests, sólo la extensión test o spec y él los encuentra solo en la carpeta tests
// Siempre tenemos que tener una carpeta tests y los archivos deben nombrarse como *.test.js o *.spec.js
// jest no requiere prácticamente de configuración, es mucho más sencillo que jasmine, su output es más amigable.
// Mock Functions, es una copia de una función que puedo testear fuera de la aplicación completa, sólo para saber si funciona o no.
// Para hacer esto escribo lo siguiente:
// const mockSumar = jest.fn(sumar);
// Para que jest muestre los console log debo correr primero en la consola
// npm test -- --silent=false

const sumar = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return null;
  const suma = a + b;
  return suma;
};

module.exports = sumar;
