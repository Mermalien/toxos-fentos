const { validateSchema, generateError } = require("../../utils");
const { commentIdSchema } = require("../../schemas/comments");
const { selectCommentById } = require("../../repositories/comments");

const getSingleComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    await validateSchema(commentIdSchema, { id: id });
    const comment = await selectCommentById(id);
    if (!comment) {
      generateError("El comentario no está disponible.");
    }
    res.send({
      status: "Este es el comentario",
      data: comment,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getSingleComment;
