const { selectPlants } = require("../../repositories/plants");
const { generateError } = require("../../utils");

const getAllPlants = async (req, res, next) => {
  try {
    const plants = await selectPlants(req.query);
    if (!plants) {
      generateError("No hay plantas disponibles");
    }
    res.send({
      status: "Estas son las plantas publicadas",
      data: plants,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getAllPlants;
