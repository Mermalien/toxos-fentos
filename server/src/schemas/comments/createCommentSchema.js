const Joi = require("joi");

const createCommentSchema = Joi.object({
  comment: Joi.string().max(1500).required().messages({
    "string.max": "Máximo 1500 caracteres",
  }),
});

module.exports = createCommentSchema;
