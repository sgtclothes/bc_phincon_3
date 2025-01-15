const { Advisor, sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

module.exports = {
    getAdvisorsWithStudentNames: async (req, res) => {
        try {
            const advisors = await sequelize.query(
                `
                SELECT a.id, a.fullname, s.name
                FROM Advisors a
                INNER JOIN Students s ON a.id = s.advisorId
            `,
                {
                    type: QueryTypes.SELECT,
                }
            );
            res.status(200).json({
                status: "success",
                data: advisors,
                message: "Successfully get all advisors with student names",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getAllAdvisors: async (req, res) => {
        try {
            const advisors = await Advisor.findAll({
                attributes: ["id", "fullname"],
            });
            res.status(200).json({
                status: "success",
                data: advisors,
                message: "Successfully get all advisors",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    getAdvisorById: async (req, res) => {
        const { id } = req.params;
        try {
            const advisor = await Advisor.findOne({
                where: {
                    id,
                },
            });
            if (!advisor) {
                return res.status(404).json({
                    status: "error",
                    message: "Advisor not found",
                });
            }
            res.status(200).json({
                status: "success",
                data: advisor,
                message: "Successfully get advisor",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    createAdvisor: async (req, res) => {
        try {
            const newAdvisor = await Advisor.create({
                ...req.body,
                id: uuidv4(),
            });
            res.status(201).json({
                status: "success",
                data: newAdvisor,
                message: "Successfully create advisor",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    updateAdvisor: async (req, res) => {
        const { id } = req.params;
        try {
            const advisor = await Advisor.findOne({
                where: {
                    id,
                },
            });
            if (!advisor) {
                return res.status(404).json({
                    status: "error",
                    message: "Advisor not found",
                });
            }
            await advisor.update(req.body);
            res.status(200).json({
                status: "success",
                data: advisor,
                message: "Successfully update advisor",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
    deleteAdvisor: async (req, res) => {
        const { id } = req.params;
        try {
            const advisor = await Advisor.findOne({
                where: {
                    id,
                },
            });
            if (!advisor) {
                return res.status(404).json({
                    status: "error",
                    message: "Advisor not found",
                });
            }
            await advisor.destroy();
            res.status(200).json({
                status: "success",
                message: "Successfully delete advisor",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    },
};
