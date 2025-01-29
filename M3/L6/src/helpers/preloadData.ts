// IMPORTANTE: siempre usar el transactionalEntityManager porque solo vive detro de esta transacción si no no se guardan los cambios. si una de las transacciones falla no se carga ningún usuario

import { AppDataSource } from "../config/data-source";
import UserRepository from "../Repositories/UserRepository";
import VehicleRepository from "../Repositories/VehicleRepository";

// Lo correcto sería crear una interfaz para cada uno
const preloadUsers = [
  {
    name: "Jorge Vega",
    email: "jvega@gmail.com",
    age: 32,
    active: true,
  },
  {
    name: "Belen Bietti",
    email: "belu@gmail.com",
    age: 25,
    active: true,
  },
  {
    name: "Ignacio Amatt",
    email: "nacho@gmail.com",
    age: 28,
    active: true,
  },
  {
    name: "Santiago Vega",
    email: "santi@gmail.com",
    age: 30,
    active: true,
  },
];
const preloadVehicles = [
  {
    brand: "Ford",
    model: "Fiesta",
    year: 2020,
    color: "Red",
    userId: 1,
  },
  {
    brand: "Renault",
    model: "Clio",
    year: 2019,
    color: "Black",
    userId: 2,
  },
  {
    brand: "Chevrolet",
    model: "Onix",
    year: 2018,
    color: "White",
    userId: 3,
  },
  {
    brand: "Fiat",
    model: "Palio",
    year: 2017,
    color: "Blue",
    userId: 4,
  },
];

export const preloadUserData = async () => {
  await AppDataSource.manager.transaction(
    async (transactionalEntityManager) => {
      const users = await UserRepository.find();

      if (users.length)
        return console.log(
          "No se hizo la precarga de datos porque ya hay usuarios en la tabla"
        );

      for await (const user of preloadUsers) {
        const newUser = await UserRepository.create(user);
        await transactionalEntityManager.save(newUser);
      }
      console.log("Precarga de datos de usuarios realizada con éxito");
    }
  );
};

export const preloadVehiclesData = async () => {
  /* AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    const vehicles = await vehicleModel.find();

    if (vehicles.length)
      return console.log(
        "No se hizo la precarga de datos porque ya hay vehiculos en la tabla"
      );

    for await (const vehicle of preloadVehicles) {
      const newVehicle = await vehicleModel.create(vehicle);
      await transactionalEntityManager.save(newVehicle);
      const user = await userModel.findOneBy({ id: vehicle.userId });
      if (user) {
        newVehicle.user = user;
        await transactionalEntityManager.save(newVehicle);
      }
    }
    console.log("Precarga de datos de vehículos realizada con éxito");
  }); */

  // Vamos a trabajar con QUERYRUNNER
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  const promises = preloadVehicles.map(async (vehicle) => {
    const newVehicle = await VehicleRepository.create(vehicle);
    await queryRunner.manager.save(newVehicle);
    const user = await UserRepository.findOneBy({ id: vehicle.userId });
    if (!user) throw Error("Usuario inexistente");
    newVehicle.user = user;
    queryRunner.manager.save(newVehicle);
  });

  try {
    await queryRunner.startTransaction();
    await Promise.all(promises);
    console.log("Precarga de vehículos realizada con éxito");
    await queryRunner.commitTransaction();
  } catch {
    console.log("Error al interntar crear los vehículos");
    await queryRunner.rollbackTransaction();
  } finally {
    console.log("El intento de precarga ha finalizado");
    await queryRunner.release();
  }
};
