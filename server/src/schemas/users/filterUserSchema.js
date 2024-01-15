const Joi = require("joi");

const filterUserSchema = Joi.object({
  name: Joi.string(),
});

module.exports = filterUserSchema;
