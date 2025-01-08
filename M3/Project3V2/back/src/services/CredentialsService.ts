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
import ICredential from "../Interfaces/ICredential";

// Base de Datos
const credentials: ICredential[] = [
  {
    id: 1,
    username: "Ariel",
    password: "1234",
  },
];
let credentialId = 10;

export const credentialsService = async (
  CreateCredentialDto: ICreateCredentialDto
): Promise<ICredential> => {
  // createCredentialDto = { username: "Ariel", password: "1234" }
  const { username, password } = CreateCredentialDto;
  const newCredential: ICredential = { id: credentialId++, username, password };
  credentials.push(newCredential);
  return newCredential;
};

export const validateCredentialService = async (
  validateCredentialDto: ICreateCredentialDto
): Promise<number> => {
  const { username, password } = validateCredentialDto;
  // Buscar la credencial
  const foundCredential: ICredential | undefined = credentials.find(
    (credential) => credential.username === username
  );
  // Verificar que existe el username
  if (!foundCredential) {
    throw new Error("Credenciales incorrectas");
  }
  // Verificar la contraseña
  if (foundCredential.password !== password) {
    throw new Error("Credenciales incorrectas");
  }
  return foundCredential.id;
};
