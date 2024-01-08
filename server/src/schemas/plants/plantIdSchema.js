const Joi = require("joi");
const plantIdSchema = Joi.number().positive().required();

module.exports = plantIdSchema;
