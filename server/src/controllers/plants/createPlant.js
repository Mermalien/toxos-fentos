const { validateSchema, generateError, saveImg } = require("../../utils");
const createPlantSchema = require("../../schemas/plants/createPlantSchema");
const { insertPlantInDb } = require("../../repositories/plants");

const createPlant = async (req, res, next) => {
  try {
    const userId = req.auth.id;
    const { title, description, category, flower } = req.body;
    await validateSchema(createPlantSchema, req.body);

    const image = req.files?.image;
    if (!image) {
      generateError("Debes añadir una imagen", 400);
    }

    const imageName = await saveImg(image.data, 400);

    const insertedPlant = await insertPlantInDb({
      userId,
      title,
      description,
      image: imageName,
      category,
      flower,
    });
    res.send({
      status: "Publicado correctamente",
      data: {
        id: insertedPlant,
        userId,
        title,
        description,
        image: imageName,
        category,
        flower,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = createPlant;
