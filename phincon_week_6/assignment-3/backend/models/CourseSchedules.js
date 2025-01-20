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
            CourseSchedules.belongsTo(models.Course, {
                foreignKey: "courseId",
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            });
        }
    }
    CourseSchedules.init(
        {
            schedule: DataTypes.DATE,
            courseId: DataTypes.UUID,
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
