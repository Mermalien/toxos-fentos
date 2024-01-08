const { selectFavById, deleteFav, addFav } = require("../../repositories/fav");
const { selectPlantById } = require("../../repositories/plants");
const { generateError } = require("../../utils");

const favController = async (req, res, next) => {
  try {
    const { plantId } = req.params;
    const plant = await selectPlantById(plantId);
    if (!plant) {
      generateError("No es posible añadir a favoritos ya que no existe", 404);
    }

    const loggedUserId = req.auth.id;
    const isFav = await selectFavById(plantId, loggedUserId);

    let markedFavorite;
    let statusCode;
    if (isFav) {
      deleteFav(loggedUserId, plantId);
      markedFavorite = false;
      statusCode = 200;
    } else {
      addFav(loggedUserId, plantId);
      markedFavorite = true;
      statusCode = 201;
    }

    res.status(statusCode).send({
      data: { markedFavorite },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = favController;
