import { Vehicle } from "../entities/Vehicle";
import { vehicleModel } from "../config/data-source";
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
  return newVehicle;
};
