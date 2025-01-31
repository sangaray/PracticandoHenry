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

      // Crear el resto de las validaciones
      // - Qué existe username, password
      // - Validaciones en middleware en back y en el front y en la base de datos
      // - Se puede usar regex para validar el password
    }
    if (name.length < 3 || name.length > 50 || typeof name !== "string") {
      throw new Error(
        "El nombre debe tener entre 3 y 50 caracteres y ser de tipo string"
      );
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
