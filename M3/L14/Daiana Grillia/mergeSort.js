const datosDesordenados = [5, 3, 7, 1, 2, 8, 4, 9, 6, 10];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const div = dividir(array);
  const left = div[0];
  const right = div[1];

  return merge(mergeSort(left), mergeSort(right));
}

function dividir(array) {
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return [left, right];
}

function merge(left, right) {
  const array = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  while (left.length) {
    array.push(left.shift());
  }

  while (right.length) {
    array.push(right.shift());
  }
  return array;
}

console.log(mergeSort(datosDesordenados));
