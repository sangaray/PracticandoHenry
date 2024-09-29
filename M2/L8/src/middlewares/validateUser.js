// Lo importante aquí es que la validación se haga antes de que llegue al controlador.
// Donde queremos que ocurra esta validadción. No me sirve poner esta validación en server.js, porque pasan todas las request y puede que algunas no cumplan la validación. Este middleware a estar en una para operación específica el post de los usuariso.
// Respuestas posibles al error, las que vamos a ver no son las mejores, pero son las que vamos a usar
// next("mensaje de error"), libera la request para seguir, Express tiene un manejador de errores, que hace en este caso que si el error ocurre no continúe el camino de la solicitud, sino que se derive al manejador de errores Esta opción no es buena porque el código de error que brinda no es correcto, da un error de servidor (500), pero en realidad es un error del cliente (400)
// res.status(400).json({ error: "Falta el dato del nombre" }); tiene la capacidad de responder, el return frena la ejecución, y da el error correcto desde el middleware, esta es una práctica polémica, no recomendable.

const validateUser = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    // next("Nombre inválido o no provisto");
    return res.status(400).json({ error: "Falta el dato del nombre" });
  } else {
    next();
  }
};

module.exports = validateUser;
