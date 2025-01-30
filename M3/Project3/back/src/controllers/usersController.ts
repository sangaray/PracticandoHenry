//= Todo lo que llega por url va a ser string. Debería ser number pero llega como string
// Se usa req: Request<{ id: string }> para indicar que llega por param
// Que recibe por Request<{param}, {query}, {body}>

import { Request, Response } from "express";
import {
  createUserService,
  findUserByCredentialIdService,
  getAllUsersService,
  getUserByIdService,
} from "../services/usersService";
import ICreateUserDto from "../dtos/ICreateUserDto";
import ICreateCredentialDto from "../dtos/ICreateCredentialDto";
import { validateCredentialService } from "../services/CredentialsService";
import { User } from "../entities/UserEntity";

// GET /users => Obtener el listdo de todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers: User[] = await getAllUsersService();
    res.status(200).json(allUsers);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// GET /users/:id => Obtener el detalle de un usuario específico
export const getUserById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    const user: User = await getUserByIdService(id);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// POST /users/register => Registro de un nuevo usuario
export const register = async (
  req: Request<{}, {}, ICreateUserDto>,
  res: Response
) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: User = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });

    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// POST /users/login => Login del usuario a la aplicación
export const login = async (
  req: Request<{}, {}, ICreateCredentialDto>,
  res: Response
) => {
  try {
    const { username, password } = req.body;
    // 1. Validar Usuario
    const credentialId = await validateCredentialService({
      username,
      password,
    });
    // 2. Buscar datos del usaurio
    const user: User = await findUserByCredentialIdService(credentialId);
    res.status(200).json({ login: true, user });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
