// Una función async siempre devuelve una promesa que se resuelve a un determinado valor en este caso IUser
// Una función que no retorna nada se dice que s void
// Aquí es donde vamos a cambiar cosas para utilizar typeORM

import { userModel } from "../config/data-source";
import UserDto from "../dto/userDto";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";

let users: IUser[] = [
  {
    id: 1,
    name: "Jorge",
    email: "jvega@mail.com",
    age: 32,
    active: true,
  },
];

let id: number = 2;

export const createUserService = async (userData: UserDto) => {
  const user = await userModel.create(userData); // crea el registro
  const result = userModel.save(user); // guarda el registro
  return user;
};

export const getUsersService = async (): Promise<User[]> => {
  const users = await userModel.find({
    relations: {
      vehicle: true,
    },
  });
  return users;
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
  const user = await userModel.findOneBy({ id });
  return user;
};

export const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user: IUser) => {
    return user.id !== id;
  });
};
