// Promesas
// Es el eventual resultado de una operación asíncrona, normalmente no sabemos lo que puede pasar, puede ser exitoso o puede devolver un error, no hay un único resultado posible.
// Es una clase de la cual tenemos que crear una instancias. Tie ne una callback que reciben dos funciones resolve y reject, la primera resulve la promesa, es decir es exitosa, y la segunda es el rechazo de la primesa o si hay un error por alguna razón que no dejó completar el proceso que se estaba ejecutando.
// El resolve se maneja con .then y el reject con .catch
// err.message, resume el mensaje de error a la causa específica del mismo
// Se ejecuta la función y se retorna la promesa, pero no espera, defino el plan de acción de la promesa, sigo con lo que sigue y luego cuando haya una respuesta de la promesa recién se va a ejecturar, no se queda esperando a que la promesa se resuelva

// Probando como funcionan las promesas

const axios = require("axios");

/* const promesa = new Promise((resolve, reject) => {});

console.log(promesa);

const promesaResuelta = new Promise((resolve, reject) => {
  resolve("Valor de resolución");
});

const promesaRechazada = new Promise((resolve, reject) => {
  reject("Razón del rechazo");
});
 */
// Promesa real
const promise = axios.get("https://students-api.up.railway.app/movies");

promise
  .then((res) => {
    // success handler
    console.log(res.data);
  })
  .catch((err) => {
    // error handler
    console.log("Tuvimos un error");
    console.log(err.message);
  });

console.log("Se terminó todo");
// console.log(promise);
