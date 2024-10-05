// Servicios que contienen o refieren a la información de la Base de Datos

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
