// Types vs Interfaces
// No hay nada 100 por ciento escrito en piedra, todo depende de los desarrolladores, del proyecto, etc. Vamos a establecer un punto de partida.
// Interface para trabajar con propiedades de un objeto
// Date es un tipo de dato especial
// Interface no solo se ajusta a las necesidades de un objeto sino que también hereda o extiende inforcmación de una a otra

interface IUser {
  name: string;
  email: string;
  age: number;
}

interface IAdminUser extends IUser {
  adminSince: Date;
}

interface IGuestUser extends IUser {
  active: boolean;
}

const user1: IAdminUser = {
  name: "Jorge",
  email: "jvega@mail.com",
  age: 32,
  adminSince: new Date(),
};
