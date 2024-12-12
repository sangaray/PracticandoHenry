// M2-L13 Contextos y Entornos
// El contexto de ejecución se da o se crea cuando ante una ejecución.
// Cada vez que realizamos una ejecución va a contener información sobre lo que estamos ejecutando
// Cuando yo creao un módulo se crea un contexto de ejecución, luego de crearse el contexto de ejecución ocurre todo lo que tiene que ocurrir, se declaran todas las variables que se tienen que declarar, se ejecutan funciones, se realiazan operaciones, procesos, etc. se termina la ejecución y el contexto de ejecución desaparece
// Se crea el contexto de ejecución por ejecutar el módulo, a ese primer contexto de ejecución que se crea le llamamos contexto global, porque es el primer contexto, es donde está sucediendo todo
// En el siguiente ejemplo, hasta que ejecute la función sumar, sólo tengo un contexto de ejecució, el contexto global, recién cuando se ejecuta de la función se va a crear otro contexto de ejcución que va a ser local
// Al finalizar todo, se cierran todos los los contextos de ejecución
// Cuando se cierra el primer contexto local se vuelve al contexto global, para luego iniciar el siguiente contexto local. Mientras los textos locales terminan el contexto global queda en standby
// Los contextos de ejecución se pueden apilar uno sobre el otro y no se puede continuar con el anterior hasta que no terminó el siguiente. Se van cerrando de arriba hacia abajo en el coll stack

console.log("Holis, esto es un contexto de ejecución");

const sumar = (a, b) => {
  console.log("Estamos sumando números");

  return a + b;
};

const restar = (a, b) => a - b;

sumar(4, 5);

restar(5, 1);

sumar(4, 8);

console.log("Hemos finalizado");
