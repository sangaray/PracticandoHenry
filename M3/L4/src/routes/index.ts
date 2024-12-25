// La libreria junto con types express  encuentro de Router es una interface

import { Router } from "express";
import {
  createUser,
  getUsers,
  deleteUser,
} from "../controllers/usersController";

const router: Router = Router();

router.post("/users", createUser);

router.get("/users", getUsers);

router.delete("/users", deleteUser);

export default router;
