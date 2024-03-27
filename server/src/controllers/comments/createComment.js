const { insertCommentInDb } = require("../../repositories/comments");
const { generateError } = require("../../utils");

const createComment = async (req, res, next) => {
  try {
    const userId = req.auth.id;
    const { plantId } = req.params;
    const parsedPlantId = parseInt(plantId, 10);

    const { text } = req.body;
    if (!text) {
      throw generateError("No se pueden publicar comentarios vacíos");
    }

    const comment = await insertCommentInDb(userId, parsedPlantId, text);

    res.status(201).json({
      status: "Comentario publicado",
      data: {
        id: comment,
        userId,
        plantId: parsedPlantId,
        text,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createComment;
