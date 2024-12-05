// CONTROLLERS
// En este módulo van a estar las funciones que establece las reglasde negocio de cada una de las rutas. Define que se va a hacer en la ruta.
// Para esa ruta GET /users, vamos a ir a la base de datos a pedir la información de los usuarios
// Responder al cliente con la información obtenida.
// El controlador también maneja errores
// También es conveniente modularizar o separar los controllers, para que cada uno responde a la ruta que le corresponde

const userController = (req, res) => {
  // console.log("Estamos recibiendo una solicitud");
  res
    .status(200)
    .send("Estamos recibiendo una solicitud para obtener datos de usuarios");
};

const vehiclesController = (req, res) => {
  res
    .status(200)
    .send("Estamos recibiendo una solicitud para obtener datos de vehiculos");
};

module.exports = {
  userController,
  vehiclesController,
};
