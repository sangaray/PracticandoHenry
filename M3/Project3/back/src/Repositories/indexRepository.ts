import AppDataSource from "../config/data-source";
import { Credential } from "../entities/CredentialEntity";
import { User } from "../entities/UserEntity";

export const credentialRepository = AppDataSource.getRepository(Credential);

export const userRepository = AppDataSource.getRepository(User);
