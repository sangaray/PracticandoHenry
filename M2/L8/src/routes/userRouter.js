// 4. Es un enrutador que define una ruta de tipo get  a

const { Router } = require("express");
const userController = require("../controllers/userController");
const validateUser = require("../middlewares/validateUser");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", validateUser, userController.createUser);

module.exports = userRouter;
