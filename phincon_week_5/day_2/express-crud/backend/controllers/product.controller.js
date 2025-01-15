const products = require("../data/products.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const ResponseUtil = require("../utils/response.util");

module.exports = {
    getAllProducts: (req, res) => {
        try {
            const productsFS = JSON.parse(fs.readFileSync("data/products.json", "utf-8"));
            ResponseUtil.success(res, productsFS);
        } catch (error) {
            console.error(error.message);
            ResponseUtil.error(res, error.message);
        }
    },
    getProductById: (req, res) => {
        try {
            const product = req.product;
            ResponseUtil.success(res, product);
        } catch (error) {
            console.error(error.message);
            ResponseUtil.error(res, error.message);
        }
    },
    createProduct: (req, res) => {
        try {
            const { name, price, category, stock } = req.body;
            const productsFS = JSON.parse(fs.readFileSync("data/products.json", "utf-8"));
            const newProduct = { id: uuidv4(), name, price, category, stock };
            productsFS.products.push(newProduct);
            fs.writeFileSync("data/products.json", JSON.stringify(productsFS));
            ResponseUtil.success(res, newProduct);
        } catch (error) {
            console.error(error.message);
            ResponseUtil.error(res, error.message);
        }
    },
    updateProduct: (req, res) => {
        try {
            const { name, price, category, stock } = req.body;
            const product = req.product;
            product.name = name;
            product.price = price;
            product.category = category;
            product.stock = stock;
            fs.writeFileSync("data/products.json", JSON.stringify(products));
            ResponseUtil.success(res, product);
        } catch (error) {
            console.error(error.message);
            ResponseUtil.error(res, error.message);
        }
    },
    deleteProduct: (req, res) => {
        try {
            const indexTarget = req.indexTarget;
            products.products.splice(indexTarget, 1);
            fs.writeFileSync("data/products.json", JSON.stringify(products));
            ResponseUtil.success(res, indexTarget);
        } catch (error) {
            console.error(error.message);
            ResponseUtil.error(res, error.message);
        }
    },
};
