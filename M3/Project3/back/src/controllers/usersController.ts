// Devuelven un mensaje para cada metodo http

import { Request, Response } from "express";

// GET /users => Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Crear un nuevo usuario" });
};
// GET /users/:id => Obtener un usuario por ID
export const getUserById = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Obtener un usuario por ID" });
};

// POST /users/register => Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Crear un nuevo usuario" });
};
