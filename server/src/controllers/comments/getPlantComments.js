const { selectCommentsByPlant } = require("../../repositories/comments");
const { selectPlantById } = require("../../repositories/plants");
const { generateError } = require("../../utils");

const getPlantComments = async (req, res, next) => {
  try {
    const { plantId } = req.params;
    await selectPlantById(plantId);
    const commentsInPlant = await selectCommentsByPlant(plantId);
    if (!commentsInPlant) {
      generateError("No hay comentarios.");
    }

    res.send({
      status: "Comentarios de la publicación",
      data: commentsInPlant,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getPlantComments;
