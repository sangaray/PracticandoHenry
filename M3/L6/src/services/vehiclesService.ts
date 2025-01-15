import { Vehicle } from "../entities/Vehicle";
import { userModel, vehicleModel } from "../config/data-source";
import VehicleDto from "../dto/vehicleDto";

export const getVehiclesService = async (): Promise<Vehicle[]> => {
  const vehicles = await vehicleModel.find({
    relations: {
      user: true,
    },
  });
  return vehicles;
};

export const createVehicleService = async (
  vehicle: VehicleDto
): Promise<Vehicle> => {
  const newVehicle = await vehicleModel.create(vehicle);
  await vehicleModel.save(newVehicle);

  // El vehículo está creado pero falte quién es el dueño
  const user = await userModel.findOneBy({ id: vehicle.userId });

  // Para crear una relación de uno a uno
  // if (user) {
  //   user.vehicle = newVehicle;
  //   await userModel.save(user);
  // } else {
  //   throw new Error("Usuario inexistente");
  // }

  // Para crear una relación de uno a muchos
  if (user) {
    newVehicle.user = user;
    vehicleModel.save(newVehicle);
  } else {
    throw new Error("Usuario inexistente");
  }

  return newVehicle;
};
