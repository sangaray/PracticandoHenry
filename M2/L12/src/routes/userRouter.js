// Enrutador que define una ruta get y una ruta post.
// El nombre que pongamos en la ruta para el parámetro :id en este caso, es el mismo que debemos usar en el controller

const { Router } = require("express");
const userController = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", userController.getUserById);

userRouter.post("/", userController.createUser);

module.exports = userRouter;
