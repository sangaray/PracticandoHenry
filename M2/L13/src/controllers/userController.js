// M2-L13 - Manejo de errores
// Método 1 - Manejador de errores de express
// Si el error es síncrono express puede manejarlo de manera automatica sin que la aplicación crashee. pero si el error es asíncrono no puede hacerlo
// Cuando usamos esta lógica, donde el controlador va a realizar una operación solicitada por el servicio es conveniente que el control de errores se encuentre en el lado del controlador, que es el que va a llamar a distintas funciones del servicio y puede haber algún error en alguna de ellas. Es importante centralizar los manejadores aquí
// El uso de try catch en cada solicitud no es la mejor, ya que estamos repitiendo código, no auda a la legibilidad, y se nos presentan situaciones en las que no sabemos que status usar
// Cambiamos el objeto module.exports por funciones
// El manejador de errores de Express asume que todos los errores son tipo 500, errores del servidor
// Otro error es que envía la traza de nuestro error, mostrando toda la historia del error, algo que expone datos internos al cliente, lo que puede crear problemas graves
// Para solucionarlo, vamos a pisar el manejador de errores de express y vamos a crear un middleware para personalizar el error, este lo vamos a poner en el archivo server.js o el que ejecute la app

const userService = require("../services/userService");
const catchAsync = require("../utils/catchAsync");

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};

/* Si el getUserById falló y no sabemos por qué, no podemos poner el status, para este ejemplo vamos a asumir que el error fue del cliente */
const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  res.status(200).json(user);
};

const getUserByName = async (req, res) => {
  const { name } = req.body;
  const user = await userService.getUserByName(name);
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = await userService.createUser({ name, email, age });
  res.status(201).json(newUser);
};

const addVehicle = async (req, res) => {
  const { userId, vehicleId } = req.body;
  await userService.addVehicle({ userId, vehicleId });
  res.status(200).json({ message: "Todo correcto" });
};

module.exports = {
  getUsers: catchAsync(getUsers),
  getUserById: catchAsync(getUserById),
  getUserByName: catchAsync(getUserByName),
  createUser: catchAsync(createUser),
  addVehicle: catchAsync(addVehicle),
};
