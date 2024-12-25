// Vamos a encontra que en algunos casos se usa Users.Controllers.ts para nombrar a los archivos controladores
// tener encuenta que vamos a querer crear un usuario en formato de objeto, pero no debería trabajarlo así, ya que sé como es el objeto con el que voy a trabajar, por lo que voy a crear una carpeta

import { Request, Response } from "express";
import {
  createUserService,
  getUsersService,
  deleteUserService,
} from "../services/usersService";
import IUser from "../interfaces/IUser";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, active } = req.body;
  const newUser: IUser = await createUserService({ name, email, active });
  res.status(201).json(newUser);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersService();
  res.status(200).json(users);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  await deleteUserService(id);
  res.status(200).json({ message: "Eliminado correctamente" });
};
