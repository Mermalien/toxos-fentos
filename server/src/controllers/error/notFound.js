const notFound = (req, res) => {
  res.status(404).send({
    status: "error 404",
    message: "No se ha encontrado",
  });
};

module.exports = notFound;
