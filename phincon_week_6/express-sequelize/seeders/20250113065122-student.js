"use strict";

const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const { Advisor } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const advisors = await Advisor.findAll({
            attributes: ["id"],
        });
        const randomAdvisorIds = advisors.map((advisor) => advisor.id);
        const getRandomAdvisorId = () => randomAdvisorIds[Math.floor(Math.random() * randomAdvisorIds.length)];
        const count = 20;
        let students = [];
        for (let i = 0; i < count; i++) {
            students.push({
                id: uuidv4(),
                name: faker.person.fullName(),
                admissionYear: faker.number.int({ min: 2018, max: 2024 }),
                major: faker.person.jobTitle(),
                advisorId: getRandomAdvisorId(),
            });
        }
        await queryInterface.bulkInsert("Students", students, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Students", null, {});
    },
};
