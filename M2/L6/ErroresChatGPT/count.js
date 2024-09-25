// Errores sin Resultado
// La consola no muestra ningún error pero ejecuta mal la función, da un resultado equivocado
// Prompt en ChatGPT: Dime cuál es el error de esta función

function contarHasta10() {
  for (let i = 1; i <= 10; i++) {
    // Se cambió var por let
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

contarHasta10();
