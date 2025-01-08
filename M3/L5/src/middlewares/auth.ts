// MIDDLEWARES
// Supongmos que queremos saber que la persona que intenga registrarse está autenticada en nuestra página
// En headers del thunder client, lo que enviamos por el protocolo http es informción, aprendimos a hacer por body, y ahora vamos a ver como hacerlo por header
// En thunder client, supongamos que ponemos token, en header, que diga autenticado
// Los headers van en el request y son objetos que viajan con la petición
// tener en cuenta que antes usabamos req,res y next, ahora tenemos que usar req: request, res: response, next: NextFunction, esta última es una interface
// Los tokens de autenticación viajan a través de los headers

import { Request, Response, NextFunction } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;

  if (token === "autenticado") next();
  else res.status(400).json({ message: "Error: Falta autenticación" });
};

export default auth;
