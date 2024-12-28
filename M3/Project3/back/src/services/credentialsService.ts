import ICredential from "../interfaces/ICredential";
import CredentialDto from "../dtos/ICreateCredentialDto";

// Base de Datos
const credentials: ICredential[] = [
  {
    id: 1,
    username: "admin",
    password: "admin",
  },
  {
    id: 2,
    username: "john_doe",
    password: "123456",
  },
  {
    id: 3,
    username: "jane_doe",
    password: "abcdef",
  },
  {
    id: 4,
    username: "alice_smith",
    password: "qwerty",
  },
  {
    id: 5,
    username: "bob_jones",
    password: "password123",
  },
];

let credentialId = 6;

export const createCredentialService = async (
  credentialData: CredentialDto
): Promise<ICredential> => {
  const { username, password } = credentialData;

  const newCredential: ICredential = {
    id: credentialId++,
    username,
    password,
  };
  credentials.push(newCredential);
  return newCredential;
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
