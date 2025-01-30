"use strict";

const { v4: uuidv4 } = require("uuid");
const { Course, User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const courses = await Course.findAll({
            attributes: ["id"],
        });
        const users = await User.findAll({
            attributes: ["id"],
        });
        const randomCourseIds = courses.map((course) => course.id);
        const randomUserIds = users.map((user) => user.id);
        const getRandomCourseId = () => randomCourseIds[Math.floor(Math.random() * randomCourseIds.length)];
        const getRandomUserId = () => randomUserIds[Math.floor(Math.random() * randomUserIds.length)];
        let userCourses = [];
        let count = 20;
        for (let i = 0; i < count; i++) {
            userCourses.push({
                id: uuidv4(),
                userId: getRandomUserId(),
                courseId: getRandomCourseId(),
            });
        }
        await queryInterface.bulkInsert("users_courses", userCourses, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("users_courses", null, {});
    },
};
