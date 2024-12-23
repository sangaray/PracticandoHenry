let num1 = 15;
const num2 = 32;

num1 = 28;

console.log(num1 + num2);

interface IPets {
  name: string;
  age: number;
  color: string;
  kind: string;
}

const pet1: IPets = {
  name: "Luna",
  age: 3,
  color: "Gray",
  kind: "Cat",
};

const pet2: IPets = {
  name: "Max",
  age: 5,
  color: "Brown",
  kind: "Dog",
};

const pet3: IPets = {
  name: "Kiwi",
  age: 2,
  color: "Green",
  kind: "Parrot",
};

const pet4: IPets = {
  name: "Goldie",
  age: 1,
  color: "Gold",
  kind: "Fish",
};

const pet5: IPets = {
  name: "Snow",
  age: 4,
  color: "White",
  kind: "Rabbit",
};

// Agrupando todos los objetos en un array
const petsArray: IPets[] = [pet1, pet2, pet3, pet4, pet5];

// Imprimiendo el array completo
console.log(petsArray);

type TVeterinarios = {
  name: string;
  since: number;
  pets: IPets[];
  shift: string;
};

const vet1: TVeterinarios = {
  name: "Dr. House",
  since: 2005,
  pets: [pet1, pet2],
  shift: "Morning",
};

const vet2: TVeterinarios = {
  name: "Dr. Dolittle",
  since: 2008,
  pets: [pet3, pet4],
  shift: "Afternoon",
};

console.log(vet1, vet2);
