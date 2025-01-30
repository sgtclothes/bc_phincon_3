const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.route");
const courseRoutes = require("./course.route");
const usersCoursesRoutes = require("./users-courses.route");

router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);
router.use("/users-courses", usersCoursesRoutes);

module.exports = router;
