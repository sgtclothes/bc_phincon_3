const { Thesis, Student, Advisor, sequelize } = require("../models");

module.exports = {
    getAllThesisSubquery: async (req, res) => {
        try {
            const theses = await Thesis.findAll({
                attributes: {
                    include: [
                        [
                            sequelize.literal("(SELECT name FROM students WHERE students.id = thesis.studentId)"),
                            "studentName",
                        ],
                        [
                            sequelize.literal(
                                "(SELECT advisors.fullname FROM advisors INNER JOIN students ON advisors.id = students.advisorId WHERE students.id = thesis.studentId)"
                            ),
                            "advisorFullname",
                        ],
                    ],
                },
            });
            res.status(200).json({
                status: "success",
                data: theses,
                message: "Successfully get all theses",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getAllThesis: async (req, res) => {
        try {
            const theses = await Thesis.findAll({
                attributes: ["id", "title"],
                include: [
                    {
                        model: Student,
                        attributes: ["id", "name"],
                        as: "student",
                        include: [
                            {
                                model: Advisor,
                                attributes: ["id", "fullname"],
                                as: "advisor",
                            },
                        ],
                    },
                ],
            });
            res.status(200).json({
                status: "success",
                data: theses,
                message: "Successfully get all theses",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
};
