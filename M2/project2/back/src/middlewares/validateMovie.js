const validateMovie = (req, res, next) => {
  console.log(req.body);

  const { title } = req.body;
  const { year } = req.body;
  const { director } = req.body;

  if (!title || !year || !director) {
    // next("Nombre inválido o no provisto");
    return res.status(400).json({ error: "Faltan datos de la Película" });
  } else {
    next();
  }
};

module.exports = validateMovie;
