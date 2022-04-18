function validateSchema(schema) {
    return async function validate(req, res, next) {
        const result = schema.validate(req.body, {abortEarly: false});
        if (result.error) {
            // Si hay errores de validación, retorna status BAD REQUEST (400) y una lista con todos los errores
            res.status(400).json({
                "errors": result.error.details.map(detail => detail.message)
            });
        }
        next();
    }
}

module.exports = validateSchema;