const movieController = (req, res) => {
  res
    .status(200)
    .send("Próximamente las películas estarán disponibles para ver");
};

module.exports = movieController;
