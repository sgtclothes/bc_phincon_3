"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.belongsToMany(models.Course, {
                through: models.UsersCourses,
                foreignKey: "userId",
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            });
        }
    }
    User.init(
        {
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            password: DataTypes.STRING,
            fullname: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
            timestamps: true,
        }
    );
    return User;
};
