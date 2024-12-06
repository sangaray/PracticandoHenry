// M2-L12 - Mongoose II
// En el service createUser, en lugar de utilizar cada campo como parámetro, lo que hago es recibirlo en un parámetro único Users que recibe el objeto enviado por el controller.
// Tengo dos formas de recibir los campos una es usar directamente user en el método create y otra es para el objeto con cada campo que se va a recibir, esta última forma la voy a usar si en algún momento voy a necesitar hacer cambios en las propiedades del objeto, pero en este caso nos conviene utilizar la primera forma.
// El método create del modelo va a recibir un objeto con propiedad que es igual al nombre del esquema y el valor
// Para crear un nuevo registro se utiliza el método create y para buscar un registro por su id se utiliza el método findById
// Para recuperar un registro por el nombre usamos el método findOne.

/* M2-L12 - Mongoose II - Método populate, sirve para reemplazar el id por el objeto completo que se encuentra en la colección relacionada. Lo voy a agregar al método getUsers*/

const User = require("../models/User");

/* const users = [
  {
    name: "John Doe",
    email: "jdoe@gmail.com",
  },
]; */

module.exports = {
  getUsers: async () => {
    const users = await User.find().populate("vehicle");
    return users;
  },

  getUserById: async (id) => {
    const user = await User.findById(id);
    return user;
  },

  getUserByName: async (name) => {
    const user = await User.findOne({ name });
    return user;
  },

  createUser: async (user) => {
    /* users.push({ name, email });
    return { name, email }; si necesitara hacer un cambio en alguna de las propiedades*/
    const newUser = await User.create(user);
    return newUser;
  },

  /* En este método deberíamos hacer una serie de validaciones sobre la existencia del usuario y del vehículo */
  addVehicle: async ({ userId, vehicleId }) => {
    const user = await User.findById(userId);
    user.vehicle = vehicleId;
    await user.save();
    return user;
  },
};
