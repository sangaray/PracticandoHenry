// M3-L2 - INTERFACES
//Las interfaces nos sirven para trabajar con objetos más complejos, hasta trabajamos con variables, que tenían un tipo de datos, o arreglos donde todos sus elementos tenían el mismo tipo de dato.
// Como moldear el objeto con todas las propiedades que queremos que tenga.
// Para definir un interface se usa la palabra reservada interface.
// convención para el nombre primero I y luego el nombre con primera letra mayúscula
// TS te indica que tienes que poner las propiedades de la interfaz
// Tampoco puedo agregar propiedades al objeto directamente
// La diferencia principal entre crear la interfaz IUser con una propiedad address anidada y crear una interfaz separada para address es la modularidad y reutilización del código.
// Nos da seguridad y coherencia en el código.

interface IAddress {
  street: string;
  city: string;
}

interface IUser {
  name: string;
  age: number;
  email: string;
  active: boolean;
  address: IAddress;
}

const usuario: IUser = {
  name: "Jorge Vega",
  age: 32,
  email: "jvega@gmail.com",
  active: true,
  address: {
    street: "Calle Falsa 123",
    city: "Posadas",
  },
};

/* const user = {
  name: "Jorge Vega",
  age: 32,
  email: "jvega@gmail.com",
  active: true,
  address: {
    street: "Calle Falsa 123",
    city: "Posadas",
  },
}; */
