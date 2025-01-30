const Joi = require("joi");
const { User } = require("../models");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

module.exports = {
    middlewareAuth: async (req, res, next) => {
        try {
            const token = req.cookies["course-app"];
            if (!token) {
                return res.status(401).json({
                    status: "error",
                    message: "Unauthorized",
                });
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    middlewareAuthRegister: async (req, res, next) => {
        try {
            const schema = Joi.object({
                username: Joi.string().required(),
                email: Joi.string().required(),
                password: Joi.string().required(),
                fullname: Joi.string().required(),
                phoneNumber: Joi.string().required(),
            });
            const { error } = schema.validate(req.body);
            if (error) {
                return res.status(400).json({
                    status: "error",
                    message: error.message,
                });
            }
            const user = await User.findOne({
                where: {
                    [Op.or]: {
                        email: req.body.email,
                        username: req.body.username,
                        phoneNumber: req.body.phoneNumber,
                    },
                },
            });
            if (user) {
                return res.status(400).json({
                    status: "error",
                    message: "User already exists",
                });
            }
            next();
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    middlewareAuthLogin: async (req, res, next) => {
        try {
            const schema = Joi.object({
                email: Joi.string().required(),
                password: Joi.string().required(),
            });
            const { error } = schema.validate(req.body);
            if (error) {
                return res.status(400).json({
                    status: "error",
                    message: error.message,
                });
            }
            next();
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
};
