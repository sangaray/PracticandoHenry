import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Eli09Ate89",
  database: "demo_typeorm",
  // dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
