"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Thesis extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Thesis.belongsTo(models.Student, {
                foreignKey: "studentId",
                as: "student",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });
        }
    }
    Thesis.init(
        {
            title: DataTypes.STRING,
            studentId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Thesis",
        }
    );
    return Thesis;
};
