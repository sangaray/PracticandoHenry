// 5. Tenemos un módulo con las funciones que son las encargadas de enviar al cliente la información en este caso del usuario, lo mismo sucede con los posts informar que no se pudo realizar.
// Nunca debemos dejar los errores al azar, debemos prepararlo para responder al error.

const userService = require("../services/userService");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};
