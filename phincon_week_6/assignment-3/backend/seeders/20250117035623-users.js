"use strict";

const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let users = [];
        let count = 20;

        for (let i = 0; i < count; i++) {
            users.push({
                id: uuidv4(),
                username: faker.internet.username(),
                email: faker.internet.email(),
                phoneNumber: faker.phone.number(),
                password: faker.internet.password(),
                fullname: faker.person.fullName(),
            });
        }
        await queryInterface.bulkInsert("users", users, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("users", null, {});
    },
};
