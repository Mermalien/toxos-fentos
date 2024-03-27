const { selectMyFavs } = require("../../repositories/fav");
const { selectUserById } = require("../../repositories/users");
const { generateError } = require("../../utils");

const getUserFavs = async (req, res, next) => {
  try {
    const id = req.auth.id;
    const user = await selectUserById(id);
    if (!user) {
      generateError("No se ha encontrado el usuario");
    }
    const myFavorites = await selectMyFavs(req.auth.id);
    if (!myFavorites || myFavorites.length === 0) {
      generateError("Todavía no has añadido favoritos.");
    }
    res.send({
      status: "Mis favoritos",
      data: myFavorites,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getUserFavs;
