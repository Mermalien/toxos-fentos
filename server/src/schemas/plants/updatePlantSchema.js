const Joi = require("joi");
const updatePlantSchema = Joi.object({
  title: Joi.string().min(4).max(200).optional().messages({
    "string.min": "Mínimo 4 caracteres",
    "string.max": "Máximo 200 caracteres",
    "string.base": "Debe ser una cadena de texto",
  }),
  description: Joi.string().min(4).max(1500).optional().messages({
    "string.min": "Mínimo 4 caracteres",
    "string.max": "Máximo 1500 caracteres",
    "string.base": "Debe ser una cadena de texto",
  }),
  category: Joi.string().min(2).max(200).optional(),
});
module.exports = updatePlantSchema;
