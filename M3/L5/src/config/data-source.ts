import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Vehicle } from "../entities/Vehicle";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Eli09Ate89",
  database: "demo_typeorm",
  synchronize: true,
  logging: false,
  entities: [User, Vehicle],
  subscribers: [],
  migrations: [],
});

export const userModel = AppDataSource.getRepository(User);

export const vehicleModel = AppDataSource.getRepository(Vehicle);
