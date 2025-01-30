const { Course } = require("../models");

module.exports = {
    getAllCourses: async (req, res) => {
        try {
            const courses = await Course.findAll();
            res.status(200).json({
                status: "success",
                data: courses,
                message: "Courses retrieved successfully",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getCourseById: async (req, res) => {
        try {
            const course = await Course.findByPk(req.params.id);
            if (!course) {
                return res.status(404).json({
                    status: "error",
                    message: "Course not found",
                });
            }
            res.status(200).json({
                status: "success",
                data: course,
                message: "Course retrieved successfully",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
};
