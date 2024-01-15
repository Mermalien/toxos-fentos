const { selectPlantByCategory } = require("../../repositories/plants");
const { filterPlantSchema } = require("../../schemas/plants");
const { validateSchema, generateError } = require("../../utils");

const getPlantByCategory = async (req, res, next) => {
  try {
    const category = req.query;
    await validateSchema(filterPlantSchema, category);

    const resultByCategory = await selectPlantByCategory(category);
    if (!resultByCategory) {
      generateError("No hay resultados");
    }

    res.send({
      status: "Resultados de la búsqueda por categoría:",
      data: resultByCategory,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getPlantByCategory;
