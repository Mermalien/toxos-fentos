const { selectPlants } = require("../../repositories/plants");

const getAllPlants = async (req, res, next) => {
  try {
    const plants = await selectPlants(req.query);
    res.send({
      status: "Estas son las plantas publicadas",
      data: plants,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getAllPlants;
