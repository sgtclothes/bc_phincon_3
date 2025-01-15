const { Student, Advisor, sequelize } = require("../models");

module.exports = {
    getAllStudentsWithIdentity: async (req, res) => {
        try {
            const students = await Student.findAll({
                attributes: {
                    include: [[sequelize.literal("CONCAT(name, ' ', admissionYear)"), "StudentIdentity"]],
                },
            });
            res.status(200).json({
                status: "success",
                data: students,
                message: "Successfully get all students with identity",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getAllStudents: async (req, res) => {
        try {
            const students = await Student.findAll({
                attributes: ["id", "name"],
            });
            res.status(200).json({
                status: "success",
                data: students,
                message: "Successfully get all students",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getStudentById: async (req, res) => {
        const { id } = req.params;
        try {
            const student = await Student.findOne({
                where: {
                    id,
                },
            });
            if (!student) {
                return res.status(404).json({
                    status: "error",
                    message: "Student not found",
                });
            }
            res.status(200).json({
                status: "success",
                data: student,
                message: "Successfully get student",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    createStudent: async (req, res) => {
        try {
            const newStudent = await Student.create({
                ...req.body,
                id: uuidv4(),
            });
            res.status(201).json({
                status: "success",
                data: newStudent,
                message: "Successfully create student",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    updateStudent: async (req, res) => {
        const { id } = req.params;
        try {
            const student = await Student.findOne({
                where: {
                    id,
                },
            });
            if (!student) {
                return res.status(404).json({
                    status: "error",
                    message: "Student not found",
                });
            }
            await student.update(req.body);
            res.status(200).json({
                status: "success",
                data: student,
                message: "Successfully update student",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    deleteStudent: async (req, res) => {
        const { id } = req.params;
        try {
            const student = await Student.findOne({
                where: {
                    id,
                },
            });
            if (!student) {
                return res.status(404).json({
                    status: "error",
                    message: "Student not found",
                });
            }
            await student.destroy();
            res.status(200).json({
                status: "success",
                message: "Successfully delete student",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
};
