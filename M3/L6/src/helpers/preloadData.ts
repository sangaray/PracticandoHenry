import { AppDataSource, userModel } from "../config/data-source";

const user1 = {
  name: "Jorge Vega",
  email: "jvega@gmail.com",
  age: 32,
  active: true,
};

const user2 = {
  name: "Belen Bietti",
  email: "belu@gmail.com",
  age: 25,
  active: true,
};

const user3 = {
  name: "Ignacio Amatt",
  email: "nacho@gmail.com",
  age: 28,
  active: true,
};

const user4 = {
  name: "Santiago Vega",
  email: "santi@gmail.com",
  age: 30,
  active: true,
};

export const preloadData = async () => {
  await AppDataSource.manager.transaction(
    async (transactionalEntityManager) => {
      // IMPORTANTE: siempre usar el transactionalEntityManager porque solo vive detro de esta transacción si no no se guardan los cambios. si una de las transacciones falla no se carga ningún usuario
      const newUser1 = await userModel.create(user1);
      const newUser2 = await userModel.create(user2);
      const newUser3 = await userModel.create(user3);
      const newUser4 = await userModel.create(user4);

      await transactionalEntityManager.save(newUser1);
      await transactionalEntityManager.save(newUser2);
      await transactionalEntityManager.save(newUser3);
      await transactionalEntityManager.save(newUser4);

      console.log("Precarga de datos realizada con éxito");
    }
  );
};
