const products = require("../data/products.json");
const Joi = require("joi");
const ResponseUtil = require("../utils/response.util");
module.exports = {
    middlewareGetAllProducts: (req, res, next) => {
        try {
            if (!products) {
                return ResponseUtil.error(res, "Products not found", 404);
            }
            next();
        } catch (error) {
            console.error(error.message);
            ResponseUtil.error(res, error.message);
        }
    },
    middlewareGetProductById: (req, res, next) => {
        try {
            const { id } = req.params;
            const product = products.products.find((product) => product.id === id);
            if (!product) {
                return ResponseUtil.error(res, "Product not found", 404);
            }
            req.product = product;
            next();
        } catch (error) {
            console.error(error.message);
            ResponseUtil.error(res, error.message);
        }
    },
    middlewareUpdateProduct: (req, res, next) => {
        const { id } = req.params;
        try {
            const product = products.products.find((product) => product.id === id);
            if (!product) {
                return ResponseUtil.error(res, "Product not found", 404);
            }
            req.product = product;
            next();
        } catch (error) {
            console.error(error.message);
            ResponseUtil.error(res, error.message);
        }
    },
    middlewareDeleteProduct: (req, res) => {
        const { id } = req.params;
        try {
            const product = products.products.find((product) => product.id === id);
            if (!product) {
                return ResponseUtil.error(res, "Product not found", 404);
            }
            req.product = product;
            next();
        } catch (error) {
            console.error(error.message);
            ResponseUtil.error(res, error.message);
        }
    },
};
