const express = require("express");
const router = express.Router();
const productRoutes = require("./product.route");
const studentRoutes = require("./student.route");
const thesisRoutes = require("./thesis.route");
const advisorRoutes = require("./advisor.route");

router.use("/products", productRoutes);
router.use("/students", studentRoutes);
router.use("/theses", thesisRoutes);
router.use("/advisors", advisorRoutes);

module.exports = router;
