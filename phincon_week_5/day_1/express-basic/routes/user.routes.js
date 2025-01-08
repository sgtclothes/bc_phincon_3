const express = require("express");
const router = express.Router();
const { validationCreateUser } = require("../middlewares/user.middleware");
const { getAllUsers, createUser, updateUser, deleteUser } = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.post("/", validationCreateUser, createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
