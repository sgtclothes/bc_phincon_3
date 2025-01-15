"use strict";

const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const { Student } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const students = await Student.findAll({
            attributes: ["id"],
        });
        const randomStudentIds = students.map((student) => student.id);
        const getRandomStudentId = () => randomStudentIds[Math.floor(Math.random() * randomStudentIds.length)];
        const count = 20;
        let theses = [];
        for (let i = 0; i < count; i++) {
            theses.push({
                id: uuidv4(),
                title: faker.book.title(),
                studentId: getRandomStudentId(),
            });
        }
        await queryInterface.bulkInsert("Theses", theses, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Theses", null, {});
    },
};
