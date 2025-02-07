const express = require("express");
const router = express.Router();
const { createSnapTransaction } = require("../controllers/payment.controller");

router.post("/snap-transaction", createSnapTransaction);

module.exports = router;
