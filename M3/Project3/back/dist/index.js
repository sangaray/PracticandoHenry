"use strict";
let num1 = 15;
const num2 = 32;
num1 = 28;
console.log(num1 + num2);
const pet1 = {
    name: "Luna",
    age: 3,
    color: "Gray",
    kind: "Cat",
};
const pet2 = {
    name: "Max",
    age: 5,
    color: "Brown",
    kind: "Dog",
};
const pet3 = {
    name: "Kiwi",
    age: 2,
    color: "Green",
    kind: "Parrot",
};
const pet4 = {
    name: "Goldie",
    age: 1,
    color: "Gold",
    kind: "Fish",
};
const pet5 = {
    name: "Snow",
    age: 4,
    color: "White",
    kind: "Rabbit",
};
// Agrupando todos los objetos en un array
const petsArray = [pet1, pet2, pet3, pet4, pet5];
// Imprimiendo el array completo
console.log(petsArray);
const vet1 = {
    name: "Dr. House",
    since: 2005,
    pets: [pet1, pet2],
    shift: "Morning",
};
const vet2 = {
    name: "Dr. Dolittle",
    since: 2008,
    pets: [pet3, pet4],
    shift: "Afternoon",
};
console.log(vet1, vet2);
