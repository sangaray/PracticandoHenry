const validateUser = ({ username, password }) => {
  const regexEmail = /\S+@\S+\.\S+/; // texto@texto.texto
  const regexLetras = /(?=.*[A-Za-z])/; // Al menos una letra
  const regexNumeros = /(?=.*\d)/; // Al menos un número
  const regexEspeciales = /(?=.*[@$!%*?&#])/; // @$!%*?&# al menos uno de estos caracteres

  const errors = {};

  // Validar username
  if (!username) {
    errors.username = "Username es requerido";
  } else {
    if (!regexEmail.test(username)) {
      errors.username = "Username debe ser un email";
    }
  }

  // Validar password
  if (!password) {
    errors.password = "Password es requerido";
  } else {
    if (password.length < 4 || password.length > 6) {
      errors.password = "Password debe tener entre 4 y 6 caracteres";
    }
    if (!regexLetras.test(password)) {
      errors.password = "Password debe tener al menos una letra";
    }
    if (!regexNumeros.test(password)) {
      errors.password = "Password debe tener al menos un número";
    }
    if (!regexEspeciales.test(password)) {
      errors.password =
        "Password debe tener al menos un caracter especial (@$!%*?&#)";
    }
  }

  return errors;
};

/* console.log(
  validateUser({
    username: "e@c.c",
    password: "1%ae",
  })
); */

export default validateUser;
