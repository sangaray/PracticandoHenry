// Una función async siempre devuelve una promesa que se resuelve a un determinado valor en este caso IUser
// Una función que no retorna nada se dice que s void

import UserDto from "../dto/userDto";
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

export const createUserService = async (userData: UserDto): Promise<IUser> => {
  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    age: userData.age,
    active: userData.active,
  };
  users.push(newUser);
  id++;
  return newUser;
};

export const getUsersService = async () => {
  return users;
};

export const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user: IUser) => {
    return user.id !== id;
  });
};
