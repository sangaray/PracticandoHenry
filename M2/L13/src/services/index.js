// SERVICIOS
// Son funciones que se van a encargar de ir a la base de datos para obtener la información para el controlador
// Voy a tener una función
// Esta se comunica con la base de datos para pedir la información de los usuarios y darle el formato adecuado
// En la DB encuentra:  id, nombre, nombre de usuario, email, fecha de alta, fecha de modificación, telefono, dirección, ciudad, país, estado, avatar
// Y responderá esto: [{id, nombre, nombre de usuario, email}]

const { getAllUsers } = require("../controllers/userController");

// 6. Aquí donde necesito enviar la información del usuario es cuando entran en acción los servicios. El controlador administra la lógica pero no administra la tarea específica. La función que cumple lo que pide el controlador es el servicio.
const userService = require("./Service/userService");

module.exports = {
  getAllUsers: (req, res) => {
    const users = userService.getUsers();
    res.status(200).json(users);
  },
};
