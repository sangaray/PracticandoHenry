// 7. Aquí tenemos la función que devuelve la información solicitada.. Va conseguir los usuarios de donde tenga que obtenerlos, al controlador no le importa de dónde los obtiene. Estos servicios, normalmente van a:
// Consultar a una base de datos o solicitar los datos de un servicio externo, en casos extraordinarios leeran la información de un archivo.
// Estas son operaciones asíncronas, todas estas funciones retornan una promesa

const users = [
  {
    id: 1,
    name: "Jorge",
  },
  {
    id: 2,
    name: "Belu",
  },
  {
    id: 3,
    name: "Alejo",
  },
];

let id = 4;

module.exports = {
  getUsers: async () => {
    return users;
  },

  createUser: async (name) => {
    const newUser = {
      id,
      name,
    };
    id++;
    users.push(newUser);
  },
};
