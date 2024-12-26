// DTO = data transfer object
// se usa para indicar el tipo y forma del objeto que se va a enviar o recibir de un servicio

interface UserDto {
  name: string;
  email: string;
  active: boolean;
}

export default UserDto;
