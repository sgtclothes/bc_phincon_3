"use strict";

const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let courses = [];
        let count = 10;

        for (let i = 0; i < count; i++) {
            const name = faker.commerce.productName();
            courses.push({
                id: uuidv4(),
                name: name,
                code: name.toUpperCase().split(" ").join("_"),
                imageUrl: faker.image.url(),
            });
        }
        await queryInterface.bulkInsert("courses", courses, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("courses", null, {});
    },
};
