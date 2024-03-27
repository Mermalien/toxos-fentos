const {
  selectPlantById,
  updatePlant,
  updatePlantImage,
} = require("../../repositories/plants");
const { selectUserById } = require("../../repositories/users");
const { updatePlantSchema } = require("../../schemas/plants");
const { validateSchema, saveImg } = require("../../utils");

const updatePlantData = async (req, res, next) => {
  try {
    const userId = await selectUserById(req.auth.id);
    const plantId = req.params.plantId; // Suponiendo que el ID de la planta está en los parámetros de la solicitud
    const newData = req.body;
    const newImage = req.files;

    // Seleccionar la planta por su ID
    const plant = await selectPlantById(plantId);

    // Verificar si el usuario tiene permiso para actualizar la planta
    if (userId.id === plant.userId) {
      // Validar los datos de la planta actualizada
      await validateSchema(updatePlantSchema, newData);

      if (req.files && req.files.image) {
        const savedImg = await saveImg(req.files.image.data, 150);
        await updatePlantImage(req.params.plantId, savedImg);

        res.status(201).send({
          status: "Actualizado correctamente",
          data: newAvatar,
        });
      }
      // Actualizar la planta
      await updatePlant(plantId, newData);

      res.send({
        status: "Actualizado correctamente",
        data: newData,
      });
    } else {
      // El usuario no tiene permiso para actualizar la planta
      res
        .status(403)
        .send({ error: "No tiene permiso para actualizar esta planta" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updatePlantData;
