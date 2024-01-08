const { validateSchema, generateError } = require("../../utils");
const { plantIdSchema } = require("../../schemas/plants");
const {
  selectPlantById,
  deletePlantById,
} = require("../../repositories/plants");

const deletePlant = async (req, res, next) => {
  try {
    const { plantId } = req.params;
    await validateSchema(plantIdSchema, plantId);

    const plant = await selectPlantById(plantId);
    if (!plant) {
      generateError("No tenemos esa planta registrada", 404);
    }

    const loggedUserId = req.auth.id;
    if (plant.userId !== loggedUserId) {
      generateError("No puedes eliminar una publicación que no es tuya", 401);
    }

    await deletePlantById(plantId);
    res.send({
      message: "Eliminado correctamente",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deletePlant;
