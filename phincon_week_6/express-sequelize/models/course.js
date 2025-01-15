"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Course.belongsToMany(models.Student, {
                through: "StudentCourse",
                foreignKey: "courseId",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });
        }
    }
    Course.init(
        {
            name: DataTypes.STRING,
            credit: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Course",
        }
    );
    return Course;
};
