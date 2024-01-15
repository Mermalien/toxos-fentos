const { selectUserByName } = require("../../repositories/users");
const { filterUserSchema } = require("../../schemas/users");
const { validateSchema, generateError } = require("../../utils");

const getUserByName = async (req, res, next) => {
  try {
    const name = req.query;
    console.log(`Nombre del parámetro`, name);
    await validateSchema(filterUserSchema, name);

    const filteredByName = await selectUserByName(name);
    if (!filteredByName) {
      generateError("No hay resultados con ese nombre");
    }

    res.send({
      status: "Resultado de la búsqueda por nombre:",
      data: filteredByName,
    });
    console.log(`Resultado por nombre ${filteredByName}`);
  } catch (error) {
    next(error);
  }
};
module.exports = getUserByName;
