// La tabla intermedia sólo sirve para traer todos los episodios donde estuvo Lisa Simpson, no se maneja como una entidad en sí
interface IUser {
  id: number;
  name: string;
  email: string;
  birthdate: string;
  nDni: number;
  credentialsId: number;
}

export default IUser;
