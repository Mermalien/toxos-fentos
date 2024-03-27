const Joi = require("joi");

const commentIdSchema = Joi.object({
  id: Joi.number().positive().required(),
});

module.exports = commentIdSchema;
