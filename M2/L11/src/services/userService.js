// Servicios que contienen o refieren a la información de la Base de Datos

const users = [
  {
    name: "John Doe",
    email: "jdoe@gmail.com",
  },
];

module.exports = {
  getUsers: async () => {
    return users;
  },

  createUser: async (name, email) => {
    users.push({ name, email });
    return { name, email };
  },
};
