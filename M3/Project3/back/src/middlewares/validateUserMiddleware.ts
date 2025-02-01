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
    return; // (según gemini, es la forma correcta de manejar el error) */

      // - Validaciones en middleware en back y en el front y en la base de datos
      // - Se puede usar regex para validar el password
    }
    if (name.length < 3 || name.length > 50) {
      throw new Error(
        "El nombre de usuario debe tener entre 3 y 50 caracteres"
      );
    }

    if (typeof name !== "string") {
      throw new Error("El nombre de usuario debe ser de tipo string");
    }

    // Validación del email

    if (typeof email !== "string") {
      throw new Error("El email debe ser un string");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("El email no tiene un formato válido");
    }

    if (username.length < 6 || username.length > 20) {
      throw new Error(
        "El nombre de usuario debe tener entre 6 y 20 caracteres"
      );
    }

    if (typeof password !== "string") {
      throw new Error("La contraseña debe ser una cadena");
    }
    if (password.length < 6 || password.length > 20) {
      throw new Error("La contraseña debe tener entre 6 y 20 caracteres");
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
