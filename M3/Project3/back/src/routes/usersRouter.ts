import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
} from "../controllers/usersController";

const router: Router = Router();

// GET /users => Obtener todos los usuarios
router.get("/", getUsers);
// GET /users/:id => Obtener un usuario por ID
router.get("/:id", getUserById);

// POST /users/register => Crear un nuevo usuario
router.post("/register", createUser);

export default router;
