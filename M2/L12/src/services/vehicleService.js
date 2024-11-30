const vehicle = require("../models/vehicle");

module.exports = {
  getAllVehicles: async () => {
    const vehicles = await vehicle.find();
    return vehicles;
  },

  createVehicle: async (vehicle) => {
    const newVehicle = await vehicle.create(vehicle);
    return newVehicle;
  },
};
