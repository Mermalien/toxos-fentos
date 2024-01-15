const { selectMyFavs } = require("../../repositories/fav");

const getUserFavs = async (req, res, next) => {
  try {
    const myFavorites = await selectMyFavs(req.auth.id);
    res.send({
      status: "Mis favoritos",
      data: myFavorites,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getUserFavs;
