const Joi = require("joi");

module.exports = {
    checkUser: (req, res, next) => {
        console.log("Check User Middleware");
        next();
    },
    validationCreateUser: (req, res, next) => {
        const schema = Joi.object({
            username: Joi.string().min(3).required(),
        });
        const validationError = schema.validate(req.body).error;
        if (validationError) {
            return res.status(400).json({
                error: validationError.details[0].message,
            });
        }
        next();
    },
};
