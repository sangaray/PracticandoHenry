const validateMovie = (req, res, next) => {
  console.log(req.body);

  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    // next("Nombre inválido o no provisto");
    return res.status(400).json({ error: "Faltan datos de la Película" });
  } else {
    next();
  }
};

module.exports = validateMovie;
