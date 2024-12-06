// Utils son funciones que pueden ser utilizadas para distintas cosas en distintos lugares del proecto o en otros proyectos, ya que son bastante genéricas y permiten ser usadas en distintos lugares o proyectos
// Lograr que todos los controladores esten manejando errores
// Es una función de orden superior, recibe una función y le va a hacer una mejoría, agregar algo que no puede resolver la función original
// Creamos una función que recibe el controlador y retorna otra función que es el nuevo controlador mejorado, ejecuta el controlador general y si hay un error hace next del error, automáticamente va a viajar al manejador de errores de express

const catchAsync = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch((err) => {
      next(err);
    });
  };
};

module.exports = catchAsync;
