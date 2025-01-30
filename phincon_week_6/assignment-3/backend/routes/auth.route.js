const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/auth.controller");
const { middlewareAuthRegister, middlewareAuthLogin } = require("../middlewares/auth.middleware");

router.post("/register", middlewareAuthRegister, register);
router.post("/login", middlewareAuthLogin, login);
router.post("/logout", logout);

module.exports = router;
