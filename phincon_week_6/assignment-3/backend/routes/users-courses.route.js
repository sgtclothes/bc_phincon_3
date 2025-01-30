const express = require("express");
const router = express.Router();

const { middlewareAuth } = require("../middlewares/auth.middleware");
const { registerCourse } = require("../controllers/users-courses.controller");

router.post("/register", middlewareAuth, registerCourse);

module.exports = router;
