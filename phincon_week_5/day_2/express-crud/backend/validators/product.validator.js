const Joi = require("joi");
const ResponseUtil = require("../utils/response.util");

module.exports = {
    validatorBodyProduct: (req, res, next) => {
        try {
            console.log("middleware", req.body);
            const schema = Joi.object({
                name: Joi.string().min(3).required(),
                price: Joi.number().required(),
                category: Joi.string().required(),
                stock: Joi.number().required(),
            });
            const validationError = schema.validate(req.body).error;
            if (validationError) {
                return ResponseUtil.error(res, validationError.details[0].message);
            }
            next();
        } catch (error) {
            console.error(error.message);
            ResponseUtil.error(res, error.message);
        }
    },
};
