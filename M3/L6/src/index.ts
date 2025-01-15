import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { preloadData } from "./helpers/preloadData";

AppDataSource.initialize().then(() => {
  console.log("Conexión a la base de datos realizada con éxito");
  preloadData().then((res) => {
    server.listen(PORT, () => {
      console.log(`Server listening en port ${PORT}`);
    });
  });
});
