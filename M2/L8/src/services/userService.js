// 7. Aquí tenemos la función que devuelve la información solicitada.. Va conseguir los usuarios de donde tenga que obtenerlos, al controlador no le importa de dónde los obtiene. Estos servicios, normalmente van a:
// Consultar a una base de datos o solicitar los datos de un servicio externo, en casos extraordinarios leeran la información de un archivo.
// Estas son operaciones asíncronas, todas estas funciones retornan una promesa

module.exports = {
  getUsers: async () => {
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

    return users;
  },
};

function getUsers() {
  return "getUsers";
}

function getUserById() {
  return "getUserById";
}

function createUser() {
  return "createUser";
}

function updateUser() {
  return "updateUser";
}

function deleteUser() {
  return "deleteUser";
}
