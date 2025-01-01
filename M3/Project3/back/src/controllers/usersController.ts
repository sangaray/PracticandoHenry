// Devuelven un mensaje para cada metodo http

import { Request, Response } from "express";
import { getUsersService, createUserService } from "../services/usersService";
import IUser from "../interfaces/IUser";
import ICreateUserDto from "../dtos/IUserDto";
import createCredentialDto from "../dtos/ICreateCredentialDto";

// GET /users => Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersService();
  res.status(200).json(users);
};
// GET /users/:id => Obtener un usuario por ID
export const getUserById = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Obtener un usuario por ID" });
};

// POST /users/register => Crear un nuevo usuario.
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const userDto: ICreateUserDto = { name, email, birthdate, nDni };
    const credentialDto: createCredentialDto = { username, password };

    const newUser: IUser = await createUserService(userDto, credentialDto);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};
