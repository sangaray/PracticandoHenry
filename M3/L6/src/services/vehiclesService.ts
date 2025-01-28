import { Vehicle } from "../entities/Vehicle";
import { AppDataSource, userModel, vehicleModel } from "../config/data-source";
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
): Promise<Vehicle | void> => {
  // Debido a que es una transacción de la que tenemos completo control vamos a crear un queryRunner.
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  try {
    queryRunner.startTransaction();

    const newVehicle = await vehicleModel.create(vehicle);
    await queryRunner.manager.save(newVehicle);

    const user = await userModel.findOneBy({ id: vehicle.userId });

    if (!user)
      throw Error("Usuario inexistente. No se ha podido crear el vehiculo.");

    newVehicle.user = user;
    await queryRunner.manager.save(newVehicle);

    await queryRunner.commitTransaction();

    return newVehicle;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw Error("usuario inexistente. No se ha podido crear el vehiculo.");
  } finally {
    await queryRunner.release();
  }
};
