const { selectPlantByUserId } = require("../../repositories/plants");
const selectUserById = require("../../repositories/users/selectUserById");

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await selectUserById(id);
    const plants = await selectPlantByUserId(req.auth.id);

    res.send({
      status: "Datos del usuario:",
      data: user,
      plants,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getUser;
