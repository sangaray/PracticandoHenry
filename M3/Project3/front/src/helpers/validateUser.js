const regexEmail = /\S+@\S+\.\S+/; // texto@texto.texto
const regexLetras = /(?=.*[A-Za-z])/; // Al menos una letra
const regexSoloLetras = /^[a-zA-Z]+$/; // Solo letras
const regexNumeros = /(?=.*\d)/; // Al menos un número
const regexSoloNumeros = /^[0-9]+$/;
const regexEspeciales = /(?=.*[@$!%*?&#])/; // @$!%*?&# al menos uno de estos caracteres
const regexDate = /^\d{2}-\d{2}-\d{4}$/; // DD-MM-YYYY

const validateUser = ({
  name,
  email,
  birthdate,
  nDni,
  username,
  password,
  confirmPassword,
}) => {
  const errors = {};

  // VALIDAR NAME
  if (!name) {
    errors.name = "Ingresa un nombre";
  } else {
    if (!regexSoloLetras.test(name)) {
      errors.name = "Nombre debe contener solo letras";
    }
    if (name.length < 4 || name.length > 50) {
      errors.name = "El nombre debe tener entre 4 y 50 caracteres";
    }
  }

  // VALIDAR EMAIL
  if (!email) {
    errors.email = "Ingresa un email";
  } else {
    if (!regexEmail.test(email)) {
      errors.email = "El email no tiene un formato válido";
    }
  }

  // VALIDAR BIRTHDATE
  if (!birthdate) {
    errors.birthdate = "Ingresa una fecha de nacimiento";
  } else {
    if (!regexDate.test(birthdate)) {
      errors.birthdate = "La fecha de nacimiento no tiene un formato valido";
    }
    const [day, month, year] = birthdate.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const today = new Date();
    if (date > today) {
      errors.birthdate =
        "La fecha de nacimiento no puede ser mayor a la fecha actual";
    }
    if (month > 12 || month < 1) {
      errors.birthdate = "El mes debe ser un número entre 1 y 12";
    }
    if (month === 2 && day > 29) {
      errors.birthdate = "Febrero no puede tener más de 29 días";
    }
    if (year % 4 !== 0 && month === 2 && day > 28) {
      errors.birthdate = "Febrero no puede tener más de 28 días";
    }
    if (
      (month === 4 || month === 6 || month === 9 || month === 11) &&
      day > 30
    ) {
      errors.birthdate = "Este mes no puede tener más de 30 días";
    }
    if (
      (month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12) &&
      day > 31
    ) {
      errors.birthdate = "Este mes no puede tener más de 31 días";
    }
  }

  // VALIDAR nDNI
  if (!nDni) {
    errors.nDni = "Ingresa tu DNI";
  } else {
    if (nDni.length !== 8) {
      errors.nDni = "El DNI debe tener 8 dígitos";
    }
    if (!regexSoloNumeros.test(nDni)) {
      errors.nDni = "El DNI debe contener solo números";
    }
  }

  // VALIDAR USERNAME
  if (!username) {
    errors.username = "Ingresa un nombre de usuario";
  } else {
    if (username.length < 4 || username.length > 20) {
      errors.username =
        "El nombre de usuario debe tener entre 4 y 20 caracteres";
    }
  }

  // VALIDAR PASSWORD
  if (!password) {
    errors.password = "Ingresa el password";
  } else {
    if (password.length < 6 || password.length > 10) {
      errors.password = "Password debe tener entre 6 y 10 caracteres";
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

    // VALIDAR CONFIRMACIÓN DE PASSWORD
    if (!confirmPassword) {
      errors.confirmPassword = "Vuelve a escribir tu contraseña";
    } else {
      if (password !== confirmPassword) {
        errors.confirmPassword = "Las contraseñas no coinciden";
      }
    }
  }

  return errors;
};

export default validateUser;
