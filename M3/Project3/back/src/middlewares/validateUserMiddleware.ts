import { Request, Response, NextFunction } from "express";
import ICreateUserDto from "../dtos/ICreateUserDto";

const validateUser = (
  req: Request<{}, {}, ICreateUserDto>,
  res: Response,
  next: NextFunction
) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  try {
    if (!name || !email || !birthdate || !nDni || !username || !password) {
      throw new Error("Todos los datos son obligatorios");
      /* res.status(400).send("Todos los campos son obligatorios");
    return; // (según gemini, es la forma correcta de manejar el error) 
    Se recomienda hacer la validación de cada item por separado*/

      // - Validaciones en middleware en back y en el front y en la base de datos
      // - Se puede usar regex para validar el password
    }

    // Validación del nombre
    if (typeof name !== "string") {
      throw new Error("El nombre de usuario debe ser de tipo string");
    }

    if (name.length < 3 || name.length > 50) {
      throw new Error(
        "El nombre de usuario debe tener entre 3 y 50 caracteres"
      );
    }

    // Verificar formato de la fecha
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dateRegex.test(birthdate)) {
      throw new Error("El formato de la fecha debe ser DD-MM-YYYY");
    }

    // Convertir la fecha a objetos Date
    const [day, month, year] = birthdate.split("-").map(Number);
    const userBirthday = new Date(year, month - 1, day);
    const now = new Date();
    console.log(day, month, year);
    console.log(userBirthday);

    // Validación del email

    if (typeof email !== "string") {
      throw new Error("El email debe ser un string");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("El email no tiene un formato válido");
    }

    // Validación del username
    if (username.length < 6 || username.length > 20) {
      throw new Error(
        "El nombre de usuario debe tener entre 6 y 20 caracteres"
      );
    }

    // Validación del password

    if (typeof password !== "string") {
      throw new Error("La contraseña debe ser una cadena");
    }

    if (password.length < 5 || password.length > 20) {
      throw new Error("La contraseña debe tener entre  y 20 caracteres");
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
      return;
    }
  }
  next();
};

export default validateUser;
