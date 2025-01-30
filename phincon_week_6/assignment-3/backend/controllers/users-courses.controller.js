const { UsersCourses, CourseSchedules, sequelize } = require("../models");
const { v4: uuidv4 } = require("uuid");

module.exports = {
    registerCourse: async (req, res) => {
        const { courseId, schedule } = req.body;
        let transaction;
        try {
            if (!courseId || !schedule || schedule === "") {
                return res.status(400).json({
                    status: "error",
                    message: "Course ID and Schedule are required",
                });
            }
            console.log("courseId : ", courseId);
            console.log("userId : ", req.user.id);
            transaction = await sequelize.transaction();
            const usersCourses = await UsersCourses.create(
                {
                    id: uuidv4(),
                    courseId: courseId,
                    userId: req.user.id,
                },
                { transaction }
            );
            await CourseSchedules.create(
                {
                    id: uuidv4(),
                    startDate: schedule.split("|")[0],
                    endDate: schedule.split("|")[1],
                    usersCoursesId: usersCourses.id,
                },
                { transaction }
            );
            await transaction.commit();
            res.status(201).json({
                status: "success",
                data: usersCourses,
                message: "Users Courses registered successfully",
            });
        } catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getAllUsersCourses: async (req, res) => {
        try {
            const usersCourses = await UsersCourses.findAll();
            res.status(200).json({
                status: "success",
                data: usersCourses,
                message: "Users Courses retrieved successfully",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getUsersCoursesById: async (req, res) => {
        try {
            const usersCourses = await UsersCourses.findByPk(req.params.id);
            if (!usersCourses) {
                return res.status(404).json({
                    status: "error",
                    message: "Course not found",
                });
            }
            res.status(200).json({
                status: "success",
                data: usersCourses,
                message: "Users Courses retrieved successfully",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
};
