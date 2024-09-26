//  RUTAS
// Aquí vamos a definir las rutas a través de las cuales nos podemos comunicar. Aquí se reciben las solicitudas, pero no lo que hace la aplicación
// Tengo definida la solicitud a /users por ejemplo
// Primero tenemos que crear un enrutador, que es un objeto que tiene las rutas que yo defina

const { Router } = require("express");
const { testController } = require("../controllers");

const router = Router();

router.get("/", testController);

module.exports = router;
