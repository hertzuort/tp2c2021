const Joi = require('joi');


const respuestas = Joi.object({
    usuarioId: Joi.string().required(),
    fecha: Joi.date().required(),
    mensaje: Joi.string().required()
})

function validateRespuestaEntry(respuestaEntry) {
    const result = respuestas.validate(respuestaEntry);
    if (result.error) {
      throw new Error(result.error.details[0].message);
    }
    return result.value;
  }

module.exports = {respuestas, validateRespuestaEntry}