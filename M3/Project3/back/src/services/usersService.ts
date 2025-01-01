import IUser from "../interfaces/IUser";
import IUserDto from "../dtos/IUserDto";
import { createCredentialService } from "../services/credentialsService";
import createCredentialDto from "../dtos/ICreateCredentialDto";

let id: number = 6;

const users: IUser[] = [
  {
    id: 1,
    name: "Jorge Vega",
    email: "jvega@mail.com",
    birthdate: new Date("1991-12-11"),
    nDni: 36456789,
    credentialsId: 1,
  },
  {
    id: 2,
    name: "Ignacio Amatt",
    email: "iamatt@mail.com",
    birthdate: new Date("1985-12-01"),
    nDni: 78945612,
    credentialsId: 2,
  },
  {
    id: 3,
    name: "Belén Bietti",
    email: "bbietti@mail.com",
    birthdate: new Date("1992-08-20"),
    nDni: 23456789,
    credentialsId: 3,
  },
  {
    id: 4,
    name: "Gamaliel Camey",
    email: "gcamey@mail.com",
    birthdate: new Date("1995-11-25"),
    nDni: 98765432,
    credentialsId: 4,
  },
  {
    id: 5,
    name: "Alejo Bengoechea",
    email: "abengoechea@mail.com",
    birthdate: new Date("1990-06-15"),
    nDni: 34567890,
    credentialsId: 5,
  },
];

export const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

export const createUserService = async (
  userData: IUserDto,
  credentialData: createCredentialDto
): Promise<IUser> => {
  const credentialsId = await createCredentialService(credentialData);

  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
    credentialsId: credentialsId,
  };
  users.push(newUser);
  id++;
  return newUser;
};
