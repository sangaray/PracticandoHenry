import server from "./server";
import { PORT } from "./config/envs";

Server.listen(PORT, () => {
  console.log(`Server listeni en port ${PORT}`);
});
