const { Product, sequelize } = require("../models");
const { v4: uuidv4 } = require("uuid");
const { QueryTypes } = require("sequelize");

module.exports = {
    getAllProductsPriceMoreThanOneHundredThousand: async (req, res) => {
        try {
            const products = await Product.findAll({
                where: sequelize.where(sequelize.col("price"), ">", 100000),
            });
            res.status(200).json({
                status: "success",
                data: products,
                message: "Successfully get all products with price more than 100000",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getAllProductsDiscountPrice: async (req, res) => {
        try {
            const products = await Product.findAll({
                attributes: {
                    exclude: ["updatedAt"],
                    include: [[sequelize.literal("price - (price * 0.1)"), "discountPrice"]],
                },    
            });
            res.status(200).json({
                status: "success",
                data: products,
                message: "Successfully get all products with discount price",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    queryAggregateProducts: async (req, res) => {
        const { aggregate, column, alias } = req.query;
        try {
            if (!aggregate || !column || !alias)
                return res.status(400).json({ status: "error", message: "Query params is required" });
            const products = await Product.findAll({
                attributes: [[sequelize.fn(aggregate, sequelize.col(column)), alias]],
            });
            res.status(200).json({
                status: "success",
                data: products,
                message: "Successfully get all products",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getProductsByCategory: async (req, res) => {
        const { category, stock } = req.query;
        try {
            if (!category) return res.status(400).json({ status: "error", message: "Category is required" });
            if (!stock) return res.status(400).json({ status: "error", message: "Stock is required" });
            const products = await sequelize.query(`SELECT * FROM products WHERE category = ? AND stock > ?`, {
                type: QueryTypes.SELECT,
                replacements: [category, stock],
            });
            res.status(200).json({
                status: "success",
                data: products,
                message: "Successfully get products by category",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getAllProductsLiteral: async (req, res) => {
        try {
            const products = await sequelize.query("SELECT * FROM products", { type: QueryTypes.SELECT });
            res.status(200).json({
                status: "success",
                data: products,
                message: "Successfully get all products",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.findAll({
                order: [["createdAt", "DESC"]],
            });
            res.status(200).json({
                status: "success",
                data: products,
                message: "Successfully get all products",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getProductById: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findOne({
                where: {
                    id,
                },
            });
            if (!product) {
                return res.status(404).json({
                    status: "error",
                    message: "Product not found",
                });
            }
            res.status(200).json({
                status: "success",
                data: product,
                message: "Successfully get product",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    createProduct: async (req, res) => {
        try {
            const newProduct = await Product.create({
                ...req.body,
                id: uuidv4(),
            });
            res.status(201).json({
                status: "success",
                data: newProduct,
                message: "Successfully create product",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    updateProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findOne({
                where: {
                    id,
                },
            });
            if (!product) {
                return res.status(404).json({
                    status: "error",
                    message: "Product not found",
                });
            }
            await product.update(req.body);
            res.status(200).json({
                status: "success",
                data: product,
                message: "Successfully update product",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    deleteProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findOne({
                where: {
                    id,
                },
            });
            if (!product) {
                return res.status(404).json({
                    status: "error",
                    message: "Product not found",
                });
            }
            await product.destroy();
            res.status(200).json({
                status: "success",
                message: "Successfully delete product",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
};
