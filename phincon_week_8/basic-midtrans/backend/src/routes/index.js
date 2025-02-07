const express = require("express");
const router = express.Router();
const paymentRoutes = require("./payment.route");

router.use("/payment", paymentRoutes);

module.exports = router;
