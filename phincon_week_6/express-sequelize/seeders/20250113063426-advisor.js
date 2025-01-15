"use strict";

const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const count = 20;
        let advisors = [];
        for (let i = 0; i < count; i++) {
            advisors.push({
                id: uuidv4(),
                fullname: faker.person.fullName(),
                major: faker.person.jobTitle(),
            });
        }
        await queryInterface.bulkInsert("Advisors", advisors, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Advisors", null, {});
    },
};
