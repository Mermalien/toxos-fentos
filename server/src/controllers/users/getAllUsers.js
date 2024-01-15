const { selectAllUsers } = require("../../repositories/users");

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await selectAllUsers(req.query);
    res.send({
      status: "Lista de usuarios:",
      data: allUsers,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getAllUsers;
