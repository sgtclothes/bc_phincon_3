const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    queryAggregateProducts,
    getProductsByCategory,
    getAllProductsLiteral,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProductsDiscountPrice,
    getAllProductsPriceMoreThanOneHundredThousand
} = require("../controllers/product.controller");

router.get("/price-more", getAllProductsPriceMoreThanOneHundredThousand);
router.get("/aggregate", queryAggregateProducts);
router.get("/discount-price", getAllProductsDiscountPrice);
router.get("/", getAllProducts);
router.get("/literal", getAllProductsLiteral);
router.get("/category", getProductsByCategory);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
