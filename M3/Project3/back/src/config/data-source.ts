import { DataSource } from "typeorm";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } from "./envs";
import { User } from "../entities/UserEntity";
import { Credential } from "../entities/CredentialEntity";
import { Appointment } from "../entities/AppointmentEntity";

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
  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
