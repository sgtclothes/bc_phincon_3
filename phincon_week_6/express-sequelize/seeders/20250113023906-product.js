"use strict";

const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let products = [
            {
                name: "Television",
                price: 3000000,
                category: "Electronics",
                stock: 10,
            },
            {
                name: "Radio",
                price: 2500000,
                category: "Electronics",
                stock: 20,
            },
            {
                name: "Mixer",
                price: 150000,
                category: "Electronics",
                stock: 50,
            },
        ];
        products = products.map((product) => ({
            ...product,
            id: uuidv4(),
        }));
        await queryInterface.bulkInsert("Products", products, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Products", null, {});
    },
};
