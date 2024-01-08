const Joi = require("joi");

const createPlantSchema = Joi.object({
  title: Joi.string().min(4).max(200).required().messages({
    "string.min": "Mínimo 4 caracteres",
    "string.max": "Máximo 200 caracteres",
    "any.required": "Título es requerido",
    "string.base": "Debe ser una cadena de texto",
  }),
  description: Joi.string().min(4).max(1500).required().messages({
    "string.min": "Mínimo 4 caracteres",
    "string.max": "Máximo 1500 caracteres",
    "any.required": "Descripcion es requerido",
    "string.base": "Debe ser una cadena de texto",
  }),
  category: Joi.string().min(2).max(200).required(),
  flower: Joi.boolean(),
});

module.exports = createPlantSchema;
