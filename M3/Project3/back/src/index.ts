import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import server from "./server";

AppDataSource.initialize().then(() => {
  console.log("Conexión a la base de datos realizada con éxito");
  server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});
