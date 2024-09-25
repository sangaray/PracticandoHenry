// Usar ChatGPT para debugear código

// Error explícito
// Contexto: Tenemos una función bubble sort que recibe una linkedList y devuelve un arreglo con elementos ordenados. Sin embargo, en la terminal me muestra este error. ¿Por qué?

function bubbleSort(linkedList) {
  // Convertir la linkedList a un arreglo
  let array = [];
  let current = linkedList.head;
  while (current !== null) {
    array.push(current.value);
    current = current.next; // se cambió corrent por current
  }

  // Ordenar el arreglo utilizanod el algoritmo de Bubble Sortº
  let n = array.length;
  for (i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Intercambiar los elementos si están en el orden incorrecto
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

// Crear una instancia de LinkedList
const linkedList = new LinkedList();

// Insertar valores en la LinkedList
linkedList.insert(10);
linkedList.insert(5);
linkedList.insert(8);
linkedList.insert(2);
linkedList.insert(1);

// Probando la función boobleSort

const sortedArray = bubbleSort(linkedList);
console.log(sortedArray);
