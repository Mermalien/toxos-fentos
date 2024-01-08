const Joi = require("joi");

const filterPlantSchema = Joi.object({
  name: Joi.string(),
  category: Joi.string(),
});
module.exports = filterPlantSchema;
