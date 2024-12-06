// Controlador para los users.
// En el controlador createUser en lugar de enviar cada campo como parámetro, lo enviamos como un objeto, listando los campos, al hacer esto no tengo que preocuparme por el orden en que los envío.
// En la url en thunder client podemos poner el id del usuario que queremos ver, este id va a viajar con la request
// En getUserByName, puedo hacer la petición con req.body

const userService = require("../services/userService");

module.exports = {
  getUsers: async (req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.status(200).json(user);
  },

  getUserByName: async (req, res) => {
    const { name } = req.body;
    const user = await userService.getUserByName(name);
    res.status(200).json(user);
  },

  createUser: async (req, res) => {
    const { name, email, age } = req.body;
    const newUser = await userService.createUser({ name, email, age });
    res.status(201).json(newUser);
  },

  addVehicle: async (req, res) => {
    const { userId, vehicleId } = req.body;
    await userService.addVehicle({ userId, vehicleId });
    res.status(200).json({ message: "Todo correcto" });
  },
};
