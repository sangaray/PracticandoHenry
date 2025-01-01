// La tabla intermedia sólo sirve para traer todos los episodios donde estuvo Lisa Simpson, no se maneja como una entidad en sí
interface IUserDto {
  id: number;
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  credentialsId: number;
}

export default IUserDto;
