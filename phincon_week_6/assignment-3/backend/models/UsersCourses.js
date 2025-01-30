"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UsersCourses extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            UsersCourses.hasOne(models.CourseSchedules, {
                foreignKey: "usersCoursesId",
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            });
        }
    }
    UsersCourses.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            userId: DataTypes.UUID,
            courseId: DataTypes.UUID,
        },
        {
            sequelize,
            modelName: "UsersCourses",
            tableName: "users_courses",
            timestamps: true,
        }
    );
    return UsersCourses;
};
