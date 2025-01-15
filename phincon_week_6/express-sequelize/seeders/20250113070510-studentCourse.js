"use strict";

const { v4: uuidv4 } = require("uuid");
const { Student, Course } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const students = await Student.findAll({
            attributes: ["id"],
        });
        const courses = await Course.findAll({
            attributes: ["id"],
        });
        const randomStudentIds = students.map((student) => student.id);
        const getRandomStudentId = () => randomStudentIds[Math.floor(Math.random() * randomStudentIds.length)];
        const randomCourseIds = courses.map((course) => course.id);
        const getRandomCourseId = () => randomCourseIds[Math.floor(Math.random() * randomCourseIds.length)];
        const count = 20;
        let studentCourses = [];
        for (let i = 0; i < count; i++) {
            studentCourses.push({
                id: uuidv4(),
                studentId: getRandomStudentId(),
                courseId: getRandomCourseId(),
            });
        }
        await queryInterface.bulkInsert("StudentCourses", studentCourses, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("StudentCourses", null, {});
    },
};
