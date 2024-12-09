const User = require("../models/User");
const formatAge = require("../helpers/formatAge");

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
    const newUser = await User.create({ ...user, age: formatAge(user.age) });
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
