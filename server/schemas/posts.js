const Joi = require('joi');
const respuestasSchema = require('../schemas/respuestas');


const postSchema = Joi.object({
    usuarioId: Joi.string().required(),
    fecha: Joi.date().required(),
    mensajes: Joi.string().required(),
    likes: Joi.array().items(Joi.string().optional()),
    respuestas: Joi.array().items(respuestasSchema.respuestas).optional()
})

  function validatePostEntry(postEntry) {
    const result = postSchema.validate(postEntry);
    if (result.error) {
      throw new Error(result.error.details[0].message);
    }
    return result.value;
  }
  
  module.exports = { validatePostEntry }
  