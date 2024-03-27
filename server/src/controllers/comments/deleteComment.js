const {
  selectCommentById,
  removeComment,
} = require("../../repositories/comments");
const { selectPlantById } = require("../../repositories/plants");
const { commentIdSchema } = require("../../schemas/comments");
const { validateSchema, generateError } = require("../../utils");

const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.auth.id;
    await validateSchema(commentIdSchema, req.params);
    const comment = await selectCommentById(id);
    if (userId !== comment.userId) {
      generateError("No tienes permiso para eliminar este comentario.");
    }
    if (!comment) {
      generateError("El comentario no existe");
    }
    await removeComment(id);
    res.send({
      message: "Eliminado correctamente",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteComment;
