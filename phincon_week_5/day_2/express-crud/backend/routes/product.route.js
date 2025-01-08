const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/product.controller");
const {
    middlewareGetAllProducts,
    middlewareDeleteProduct,
    middlewareGetProductById,
    middlewareUpdateProduct,
} = require("../middlewares/product.middleware");
const { validatorBodyProduct } = require("../validators/product.validator");

router.get("/", middlewareGetAllProducts, getAllProducts);
router.get("/:id", middlewareGetProductById, getProductById);
router.post("/", validatorBodyProduct, createProduct);
router.put("/:id", middlewareUpdateProduct, validatorBodyProduct, updateProduct);
router.delete("/:id", middlewareDeleteProduct, deleteProduct);

module.exports = router;
