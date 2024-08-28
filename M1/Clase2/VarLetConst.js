//Usando VAR
var a = 5;
var b = 10;
var suma = a + b;
console.log(suma);
var a = 15;
var suma = a + b;
console.log(suma);
var b = [5, 9, 27];
console.log(b);

// Usando LET
let c = 5;
let d = 10;
let suma1 = c + d;
console.log(suma1);
//let c = 15; Error
c = 15;
let suma2 = c + d;
console.log(suma2);
d = [5, 9, 27];
console.log(d);

// Usando CONST
const e = 5;
const f = 10;
const suma3 = e + f;
console.log(suma3);
// const e = 15; Error
// const f = [5, 9, 27] Error
e = 15;
// const suma4 = e + f; Error
// console.log(suma4);
