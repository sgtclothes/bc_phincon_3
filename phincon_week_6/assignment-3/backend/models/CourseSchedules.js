"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CourseSchedules extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            CourseSchedules.belongsTo(models.UsersCourses, {
                foreignKey: "usersCoursesId",
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            });
        }
    }
    CourseSchedules.init(
        {
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
            usersCoursesId: DataTypes.UUID,
        },
        {
            sequelize,
            modelName: "CourseSchedules",
            tableName: "course_schedules",
            timestamps: true,
        }
    );
    return CourseSchedules;
};
