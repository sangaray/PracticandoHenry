// 4. Es un enrutador que define una ruta de tipo get  a

const { Router } = require("express");
const userController = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);

module.exports = userRouter;
