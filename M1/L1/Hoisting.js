// Hoisting
// Con Var
console.log(x);
var x = 5;
console.log(x);

// Con Const o Let
// console.log(y); Error
const y = 5;
console.log(y);

// console.log(z);
let z = 5;
console.log(z);

if (true) {
	console.log(v);
}

var v = 10;
console.log(v);

if (true) {
	// console.log(w);
}

let w = 10;
console.log(w);
