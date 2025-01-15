const express = require("express");
const router = express.Router();
const { getAllThesis, getAllThesisSubquery } = require("../controllers/thesis.controller");

router.get("/", getAllThesis);
router.get("/subquery", getAllThesisSubquery);
// router.get("/:id", getProductById);
// router.post("/", createProduct);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

module.exports = router;
