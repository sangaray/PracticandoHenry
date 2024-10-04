// Controlador para los users.

const userService = require("../services/userService");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await userService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  createUser: async (req, res) => {
    const { name, email } = req.body;
    try {
      const newUser = await userService.createUser(name, email);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Error al crear al usuario" });
    }
  },
};
