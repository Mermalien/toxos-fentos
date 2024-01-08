const {
  selectPlantById,
  selectPlantImage,
} = require("../../repositories/plants");
const { plantIdSchema } = require("../../schemas/plants");
const { validateSchema, generateError } = require("../../utils");

const getSinglePlant = async (req, res, next) => {
  try {
    const { plantId } = req.params;
    await validateSchema(plantIdSchema, plantId);

    const plant = await selectPlantById(plantId);
    if (!plant) {
      generateError("La planta que buscas no existe", 404);
    }

    const plantImage = await selectPlantImage(plantId);
    plant.images = plantImage;
    res.send({
      status: "Esta es la planta:",
      data: plant,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getSinglePlant;
