// Controlador para los users.
// En el controlador createUser en lugar de enviar cada campo como parámetro, lo enviamos como un objeto, listando los campos, al hacer esto no tengo que preocuparme por el orden en que los envío.
// En la url en thunder client podemos poner el id del usuario que queremos ver, este id va a viajar con la request

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

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  createUser: async (req, res) => {
    const { name, email, age } = req.body;
    try {
      const newUser = await userService.createUser({ name, email, age });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Error al crear al usuario" });
    }
  },
};
