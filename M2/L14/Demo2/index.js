// ENTORNO LÉXICO O LEXICAL ENVIRONMENT
// Hace referencia a las variables que tengamos en nuestro contexto de execución, donde van a existir estas variables, es una lita de las variables que se trabajan en un entronto de ejecución, donde están, donde definen su valor
// sumar = fn, num1 = 5, num2 = 10 son las variables, que van a estar en el entorno lexico global, pero para la función suma num1 y num2 van a ser igual a 8 y 9 respectivamente, ya que le llegan por parámetro desde la ejecución de la función. Si los parámetros no estuvieran entonces la función buscaría en el entorno léxico global y usaría 5 y 10 respectivamente
// Cada contexto de ejecución va a buscar la variabes de adentro hacia afuera, comenzando en su propio entorno léxico y si no la encuentra va a ir buscando hacia arriba, si las encuentra las usa y si no da error de variabe no definida

let num1 = 5;
let num2 = 10;

// Devuelve 8 y 9
const sumar = (num3, num4) => {
  console.log("Sumar");
  console.log(num3);
  console.log(num4);
  return num1 + num2;
};

sumar(8, 9);

// Devuelve 8 y 9
const restar = (num1, num2) => {
  console.log("Restar");
  console.log(num1);
  console.log(num2);
  return num1 - num2;
};

restar(8, 9);

// Devuelve 5 y 10
const multiplicar = () => {
  console.log("Multiplicar");
  console.log(num1);
  console.log(num2);
  return num1 - num2;
};

multiplicar();

// Devuelve undefined y undefined
const dividir = (num6, num7) => {
  console.log("Dividir");
  console.log(num6);
  console.log(num7);
  return num6 - num7;
};

dividir();
