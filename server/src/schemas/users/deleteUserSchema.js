const Joi = require("joi");

const deleteUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = deleteUserSchema;
