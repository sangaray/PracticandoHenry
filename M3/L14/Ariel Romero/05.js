function generarSubsets(array) {
  let pasos = 0;

  function generateHelper(subset, index) {
    // Contar solo cuando se genera completamente un subconjunto
    if (index === array.length) {
      console.log(subset);
      pasos++;
      return;
    }
    generateHelper([...subset, array[index]], index + 1);
    generateHelper(subset, index + 1);
  }
  generateHelper([], 0);
  console.log({ datos: array.length, pasos });
}

generarSubsets([1, 2]);
generarSubsets([1, 2, 3]);
generarSubsets([1, 2, 3, 4]);
generarSubsets([1, 2, 3, 4, 5]);
generarSubsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// n = 2^n
// 3 = 2^3 = 8
// 4 = 2^4 = 16
// 5 = 2^5 = 32
// 6 = 2^6 = 64
// 100 = 2^100
// O(2^n) => EXPONENCIAL
