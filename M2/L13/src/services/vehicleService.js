const vehicle = require("../models/vehicle");

module.exports = {
  getAllVehicles: async () => {
    const vehicles = await vehicle.find();
    return vehicles;
  },

  createVehicle: async (vehicleData) => {
    const newVehicle = await vehicle.create(vehicleData);
    return newVehicle;
  },
};
