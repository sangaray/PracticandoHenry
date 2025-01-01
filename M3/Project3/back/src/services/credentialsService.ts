import ICredential from "../interfaces/ICredential";
import CredentialDto from "../dtos/ICreateCredentialDto";

let id: number = 6;

// Base de Datos
const credentials: ICredential[] = [
  { id: 1, username: "jvega", password: "admin123" },
  { id: 2, username: "nachito", password: "admin123" },
  { id: 3, username: "labelu", password: "admin123" },
  { id: 4, username: "gamadev", password: "admin123" },
  { id: 5, username: "alebengo", password: "admin123" },
];

export const createCredentialService = async (
  credentialData: CredentialDto
): Promise<number> => {
  const newCredential: ICredential = {
    id,
    username: credentialData.username,
    password: credentialData.password,
  };
  credentials.push(newCredential);
  id++;
  return newCredential.id;
};

export const validateCredentialService = async (
  validateDataCredential: CredentialDto
): Promise<number> => {
  const { username, password } = validateDataCredential;
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
