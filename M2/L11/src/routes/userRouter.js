// Enrutador que define una ruta get y una ruta post.

const { Router } = require("express");
const userController = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", userController.getUsers);

userRouter.post("/", userController.createUser);

module.exports = userRouter;
