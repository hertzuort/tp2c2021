const Joi = require('joi');

const userSchema = Joi.object({
  nombre: Joi.string().alphanum().min(2).max(20).required(),
  apellido:  Joi.string().alphanum().min(2).max(20).required(),
  fechaDeNacimiento: Joi.date().greater("12-31-1900").required(),
  fechaDeRegistro: Joi.date().required(),
  mail: Joi.string().email().required(),
  contraseña: Joi.string().min(5).required(),
});

function validateUser(user) {
  const result = userSchema.validate(user);
  if (result.error) {
    throw new Error(result.error.details[0].message);
  }
  return result.value;
}

module.exports = { validateUser }