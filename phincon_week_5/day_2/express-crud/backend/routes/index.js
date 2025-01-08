const express = require("express");
const router = express.Router();
const productRoutes = require("./product.route");

router.use("/api/products", productRoutes);

module.exports = router;
