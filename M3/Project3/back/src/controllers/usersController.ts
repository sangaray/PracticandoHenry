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
  // Vamos a tomar los datos del usuario del body de la request
  // Vamos a llamar a la función correspondiente del servicio de usuarios para la creación del nuevo  usuario
  // No olvidarnos del id en la intefaz, sí o sí tiene que estar
};
