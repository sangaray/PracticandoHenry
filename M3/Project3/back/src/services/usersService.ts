import ICreateUserDto from "../dtos/ICreateUserDto";
import { credentialsService } from "./CredentialsService";
import ICredential from "../Interfaces/ICredential";
import { User } from "../entities/UserEntity";
import { userRepository } from "../Repositories/indexRepository";
import { Credential } from "../entities/CredentialEntity";
export const getAllUsersService = async (): Promise<User[]> => {
  const allUsers: User[] = await userRepository.find();
  relations: {
    apointments: true;
  } // otra forma de hacer la relación
  return allUsers;
};

export const getUserByIdService = async (id: number): Promise<User> => {
  const user: User | null = await userRepository.findOne({
    where: { id },
    relations: ["apointments"], // Una forma de hacer la relación
  });

  if (!user) {
    throw new Error("Usuario inexistente");
  }
  return user;
};

export const createUserService = async (
  createUserDto: ICreateUserDto
): Promise<User> => {
  const { name, email, birthdate, nDni, username, password } = createUserDto;

  // 1. Verificar que el usuario existe
  const foundUser: User | null = await userRepository.findOneBy({ email });
  if (foundUser) {
    throw new Error("El usuario ya se encuentra registrado");
  }

  // 2. Crear la Credencial
  const newCredential: Credential = await credentialsService({
    username,
    password,
  });

  // 3. Crear al nuevo usuario

  const newUser: User = userRepository.create({
    name,
    email,
    birthdate,
    nDni,
  });

  // 4. Asociar al nuevo usuario a la credencial
  newUser.credential = newCredential;

  // 5. Guardar al nuevo usuario en la base de datos
  await userRepository.save(newUser);
  return newUser;
};

export const findUserByCredentialIdService = async (credentialId: number) => {
  const user: User | null = await userRepository.findOneBy({
    credential: { id: credentialId },
  }); // para la búsqueda sí tengo que pasarle el id de la credencial

  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return user;
};
