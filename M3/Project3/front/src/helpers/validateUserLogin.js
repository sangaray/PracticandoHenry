export default function validateUserLogin({ usernam, password }) {
  const errors = {};
  if (!username) {
    errors.username = "Ingresa el nombre de usuario";
  }

  if (!password) {
    errors.password = "Ingresa la contraseña";

    return errors;
  }

  return errors;
}
