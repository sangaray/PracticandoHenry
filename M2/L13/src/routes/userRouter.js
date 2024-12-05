// Enrutador que define una ruta get y una ruta post.
// El nombre que pongamos en la ruta para el parámetro :id en este caso, es el mismo que debemos usar en el controller
// Tengo que tener cuidado si uso varios parámetros porque se va a parar en la primera ruta que tenga param
// Si tengo rutas específicas debo ponerlas antes de cualquier ruta que tenga un :param, para que se ejecuten a que siempre va a tomar cualquier cosa después de /users/ como un parámetro. Por lo tanto la ruta con /users/:param debe ir al final de todo.

const { Router } = require("express");
const userController = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", userController.getUsers);

userRouter.get("/byName", userController.getUserByName);

userRouter.get("/:id", userController.getUserById);

userRouter.post("/", userController.createUser);

userRouter.put("/addVehicle", userController.addVehicle);

module.exports = userRouter;
