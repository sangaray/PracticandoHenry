//  RUTAS
// Aquí vamos a definir las rutas a través de las cuales nos podemos comunicar. Aquí se reciben las solicitudas, pero no lo que hace la aplicación
// Tengo definida la solicitud a /users por ejemplo
// Primero tenemos que crear un enrutador, que es un objeto que tiene las rutas que yo defina

const { Router } = require("express");
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");

const router = Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);

module.exports = router;
