const selectUserById = require("../../repositories/users/selectUserById");
const selectPlantByUserId = require("../../repositories/plants/selectPlantByUserId");

const getMe = async (req, res, next) => {
  try {
    const user = await selectUserById(req.auth.id);
    const plants = await selectPlantByUserId(req.auth.id);
    res.send({
      status: "Mis datos de usuario:",
      data: user,
      plants,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getMe;
