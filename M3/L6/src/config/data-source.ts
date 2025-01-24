import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Vehicle } from "../entities/Vehicle";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  // dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Vehicle],
  subscribers: [],
  migrations: [],
});

export const userModel = AppDataSource.getRepository(User);

export const vehicleModel = AppDataSource.getRepository(Vehicle);
