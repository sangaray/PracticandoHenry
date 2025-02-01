import AppDataSource from "../config/data-source";
import { Appointment } from "../entities/AppointmentEntity";
import { Credential } from "../entities/CredentialEntity";
import { User } from "../entities/UserEntity";

export const credentialRepository = AppDataSource.getRepository(Credential);

export const userRepository = AppDataSource.getRepository(User);

export const AppointmentRespository = AppDataSource.getRepository(Appointment);
