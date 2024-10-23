// Servicios que contienen o refieren a la información de la Base de Datos
// Ya no necesitamos el objeto con los datos
// Método find() trae todos los datos que hay en la DB

const User = require("../models/User");

/* const users = [
  {
    name: "John Doe",
    email: "jdoe@gmail.com",
  },
]; */

module.exports = {
  getUsers: async () => {
    const users = await User.find();
    return users;
  },

  createUser: async (name, email) => {
    /* users.push({ name, email });
    return { name, email }; */
  },
};
