// CHATGPT
// Mejorar la calidad del código
// Pasos para lograrlo+
// 1. identificación del problema
// Vamos a chatgpt y le decimos: "Analiza la siguiente función y dame un listado de todos los problemas y potenciales errores que encuentras. ¿Qué buenas prácticas no sigo?"
// 2 Explorar las posibles soluciones
// Devuelve esta misma función pero con nombres de variables que sean más descriptivos y que sigan un estandar de camelCase
// Devuelve esta misma función, pero esta vez agrega el código necesario para que se valide que lo que está llegaando por parámetros son números. Caso contrario finalizar la ejecución con un aviso.
// 3.Pedir a chatgpt que resuelva los errores
// 4. Evaluar los resultados
// Otro ejemplo, Devuelveme esta misma función pero aplica el código necesario para evitar cualquier posibilidad de que se produzca una potencial division por cero.

function a(x, y, z) {
  var w = x * y;
  var t = z + y;

  for (var i = 0; i < w; i++) {
    t += i;

    if (t % 2 === 0) {
      for (var j = 0; j < y; j++) {
        t *= j;
      }
    } else {
      for (var k = 0; k < z; k++) {
        t -= k;
      }
    }
  }

  return t;
}

function calculateTotalMultiplier(factor1, factor2, factor3) {
  let product1 = factor1 * factor2;
  let total = factor3 + factor2;

  for (let i = 0; i < product1; i++) {
    total += i;

    if (total % 2 === 0) {
      for (let j = 0; j < factor2; j++) {
        total *= j;
      }
    } else {
      for (let k = 0; k < factor3; k++) {
        total -= k;
      }
    }
  }

  return total;
}

function calculateTotalMultiplier1(factor1, factor2, factor3) {
  // Validación de los parámetros
  if (
    typeof factor1 !== "number" ||
    typeof factor2 !== "number" ||
    typeof factor3 !== "number"
  ) {
    console.log("Todos los parámetros deben ser números.");
    return;
  }

  let product1 = factor1 * factor2;
  let total = factor3 + factor2;

  for (let i = 0; i < product1; i++) {
    total += i;

    if (total % 2 === 0) {
      for (let j = 0; j < factor2; j++) {
        total *= j;
      }
    } else {
      for (let k = 0; k < factor3; k++) {
        total -= k;
      }
    }
  }

  return total;
}

function calculateTotalMultiplier2(factor1, factor2, factor3) {
  // Validación de los parámetros
  if (
    typeof factor1 !== "number" ||
    typeof factor2 !== "number" ||
    typeof factor3 !== "number" ||
    factor2 === 0
  ) {
    console.log(
      "Todos los parámetros deben ser números y factor 2 no puede ser 0."
    );
    return;
  }

  let product1 = factor1 * factor2;
  let total = factor3 + factor2;

  for (let i = 0; i < product1; i++) {
    total += i;

    if (total % 2 === 0) {
      for (let j = 0; j < factor2; j++) {
        total *= j;
      }
    } else {
      for (let k = 0; k < factor3; k++) {
        total -= k;
      }
    }
  }

  return total;
}

/* function b(arr) {
  var result = 0;

  for (var i = 0; i < arr.length; i++) {
    result += arr[i];

    if (arr[i] % 2 === 0) {
      result += i;
    } else {
      result += i;
    }
  }
  return result;
} */

/* function c(num) {
  var str = num.toString();

  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return parseInt(result);
}
 */
var x = a(5, 10, 15);
var x1 = calculateTotalMultiplier(5, 10, 15);
var x2 = calculateTotalMultiplier1(5, "10", 15);
var x3 = calculateTotalMultiplier2(5, 0, 15);
// var y = b([1, 2, 3, 4, 5]);
// var z = c(12345);

console.log("x", x);
console.log("x1", x1);
console.log("x2", x2);
console.log("x3", x3);
// console.log(y);
// console.log(z);
