// M3-L1 - Diferencia javascript y typescript, con un ejemplo de cada uno al definir una variable
let x = 10;
console.log(typeof x); // number
x = "Ahora serás un string";
console.log(typeof x); // string

const usuario = "Gamaliel";

function sayHello /* (user: string) esto es de typescript */(
  user
) /* esto es javascript */ {
  console.log(`Hello ${user.toUpperCase()}`);
}

sayHello(usuario);
sayHello(1);
sayHello(true);
sayHello(["no", "funca"]);
