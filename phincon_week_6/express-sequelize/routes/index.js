const express = require("express");
const router = express.Router();
const productRoutes = require("./product.route");
const studentRoutes = require("./student.route");
const thesisRoutes = require("./thesis.route");
const advisorRoutes = require("./advisor.route");

router.use("/api/products", productRoutes);
router.use("/api/students", studentRoutes);
router.use("/api/theses", thesisRoutes);
router.use("/api/advisors", advisorRoutes);

module.exports = router;
