"use strict";

const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const { Course } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const courses = await Course.findAll({
            attributes: ["id"],
        });
        const randomCourseIds = courses.map((course) => course.id);
        const getRandomCourseId = () => randomCourseIds[Math.floor(Math.random() * randomCourseIds.length)];
        let coursesSchedules = [];
        let count = 5;
        for (let i = 0; i < count; i++) {
            coursesSchedules.push({
                id: uuidv4(),
                schedule: faker.date.future(),
                courseId: getRandomCourseId(),
            });
        }
        await queryInterface.bulkInsert("course_schedules", coursesSchedules, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("course_schedules", null, {});
    },
};
