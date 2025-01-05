import { Request, Response } from "express";

// GET /users => Obtener el listdo de todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Obtener el lista de todos los usuarios" });
};

// GET /users/:id => Obtener el detalle de un usuario específico
export const getUserById = async (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Obtener el detalle de un usuario específico" });
};

// POST /users/register => Registro de un nuevo usuario
export const register = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Registro de un nuevo usuario" });
};

// POST /users/login => Login del usuario a la aplicación
export const login = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Login del usuario a la aplicación" });
};
