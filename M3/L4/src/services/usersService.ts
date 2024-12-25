// Una función async siempre devuelve una promesa que se resuelve a un determinado valor en este caso IUser

import UserDto from "../dto/userDto";
import IUser from "../interfaces/IUser";

const users: IUser[] = [];

const id: number = 1;

export const createUserService = async (userData: UserDto): Promise<IUser> => {
  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    active: userData.active,
  };
  users.push(newUser);
  return newUser;
};

export const getUsersService = async () => {};

export const deleteUserService = () => {};
