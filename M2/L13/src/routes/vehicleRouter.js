const { Router } = require("express");
const vehiclesController = require("../controllers/vehiclesController");

const vehicleRouter = Router();

vehicleRouter.get("/", vehiclesController.getAllVehicles);

vehicleRouter.post("/", vehiclesController.createVehicle);

module.exports = vehicleRouter;
