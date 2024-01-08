const { selectPlantByName } = require("../../repositories/plants");
const { filterPlantSchema } = require("../../schemas/plants");
const { validateSchema, generateError } = require("../../utils");

const getByName = async (req, res, next) => {
  try {
    const name = req.query;
    await validateSchema(filterPlantSchema, name);

    const plantsByName = await selectPlantByName(name);
    if (!plantsByName) {
      generateError("No hay resultados");
    }

    res.send({
      status: "Resultado de la búsqueda por nombre: ",
      data: plantsByName,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getByName;
