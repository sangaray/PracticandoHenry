import { Vehicle } from "../entities/Vehicle";
import { userModel, vehicleModel } from "../config/data-source";
import VehicleDto from "../dto/vehicleDto";

export const getVehiclesService = async (): Promise<Vehicle[]> => {
  const vehicles = await vehicleModel.find();
  return vehicles;
};

export const createVehicleService = async (
  vehicle: VehicleDto
): Promise<Vehicle> => {
  const newVehicle = await vehicleModel.create(vehicle);
  const result = vehicleModel.save(newVehicle);

  // El vehículo está creado pero falte quién es el dueño
  const user = await userModel.findOneBy({ id: vehicle.userId });
  if (user) {
    user.vehicle = newVehicle;
    await userModel.save(user);
  } else {
    throw new Error("Usuario inexistente");
  }

  return newVehicle;
};
