const { selectPlantByName } = require("../../repositories/plants");
const { filterPlantSchema } = require("../../schemas/plants");
const { validateSchema, generateError } = require("../../utils");

const getByName = async (req, res, next) => {
  try {
    const title = req.query;
    await validateSchema(filterPlantSchema, title);

    const plantByName = await selectPlantByName(title);
    console.log(plantByName);
    if (!plantByName) {
      generateError("No hay resultados con ese nombre");
    }

    res.send({
      status: "Resultado de la búsqueda por nombre: ",
      data: plantByName,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getByName;
