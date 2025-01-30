/* Responsabilidad de los controladores
  1. Responder al cliente
  2. Manejar el error
  3. Desestructurar datos
  4. Invocar el servicio
*/
/* 
  Responsabilidad de los servicios
  1. Manejar lógica
  2. Conectar con la base de datos
*/

import ICreateCredentialDto from "../dtos/ICreateCredentialDto";
import { Credential } from "../entities/CredentialEntity";
import { credentialRepository } from "../Repositories/indexRepository";
export const credentialsService = async (
  CreateCredentialDto: ICreateCredentialDto
): Promise<Credential> => {
  // createCredentialDto = { username: "Ariel", password: "1234" }
  const { username, password } = CreateCredentialDto;

  // 1. Validar queno existe la credencial
  const foundCredential: Credential | null =
    await credentialRepository.findOneBy({ username });
  if (foundCredential) {
    throw new Error("Ya existe la credencial para el username");
  }

  // 2. Crear la credencial
  const newCredential: Credential = credentialRepository.create({
    username,
    password,
  });

  // 3. Guardar la credencial en la Base de Datos
  await credentialRepository.save(newCredential);
  return newCredential;
};

export const validateCredentialService = async (
  validateCredentialDto: ICreateCredentialDto
): Promise<number> => {
  const { username, password } = validateCredentialDto;

  // 1. Validar queno existe la credencial
  const foundCredential: Credential | null =
    await credentialRepository.findOneBy({ username });
  if (!foundCredential) {
    throw new Error("Credenciales incorrectas"); // No existe el username
  }

  // 2. Verificar la contraseña
  if (foundCredential.password !== password) {
    throw new Error("Credenciales incorrectas"); // Pasword incorrecto
  }
  return foundCredential.id;
};
