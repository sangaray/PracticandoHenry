import ICreateUserDto from "../dtos/ICreateUserDto";
import IUser from "../Interfaces/IUser";
import { credentialsService } from "./CredentialsService";
import ICredential from "../Interfaces/ICredential";

const users: IUser[] = [
  {
    id: 1,
    name: "Homero",
    email: "homero@mail.com",
    birthdate: "1980-01-01",
    nDni: 123456789,
    credentialsId: 1,
  },
];

let id: number = 10;

export const getAllUsersService = async (): Promise<IUser[]> => {
  const allUsers: IUser[] = users;
  return allUsers;
};

export const getUserByIdService = async (id: number): Promise<IUser> => {
  const user: IUser | undefined = users.find((user) => user.id === id);
  if (!user) {
    throw new Error("Usuario inexistente");
  }
  return user;
};

export const createUserService = async (createUserDto: ICreateUserDto) => {
  const { name, email, birthdate, nDni, username, password } = createUserDto;

  // Crear la Credencial
  const newCredential: ICredential = await credentialsService({
    username,
    password,
  });

  const newUser = {
    id: id++,
    name,
    email,
    birthdate,
    nDni,
    credentialsId: newCredential.id,
  };

  users.push(newUser);
  return newUser;
};

export const findUserByCredentialIdService = async (credentialId: number) => {
  const user = users.find((user) => user.credentialsId === credentialId);
  return user;
};
