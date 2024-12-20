// En la tsconfig.json hay una opción noImplicitAny, que dice no te voy a dejar tener ninguna variable dando vueltas que no se sepa claramente que tipo de datos es.
// num1 y num2 al estar inicializadas se deduce el tipo de dato que tienen, pero para a y b no hay ninguna posible inferencia ni aclaración del tipo de dato que son.
// Supongamos que mi aplicación es muy grando y estoy infiriendo un tipo de dato erróneo y num1 en lugar de ser 5, un número es un string. TS va a indicarme que hay un error.
// Analisis de código estático, es decir, antes de ejecutar el código, TS ya me está avisando que hay un error. Esta es una característica más importantes que tiene TS.
// Si retorno un tipo de datos equivocado al que le indiqué que debía devolver la función me va a dar un error.

const num1 = 20;
const num2 = 10;

const sumar = (a: number, b: number) => a + b;

console.log(sumar(num1, num2));
