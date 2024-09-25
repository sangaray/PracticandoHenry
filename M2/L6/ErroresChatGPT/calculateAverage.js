// Errores implícitos
// Prompt en ChatGPT: Cuál es el problema de esta función
// Al ejecutarla da por resultado NaN

function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // Se cambió <= por < sólamente
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
