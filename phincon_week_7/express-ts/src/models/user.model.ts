import { Model, DataTypes, Sequelize } from "sequelize";
import { UserModel } from "../types/user.type";

export default (sequelize: Sequelize) => {
    class User extends Model<UserModel> implements UserModel {
        public id!: number;
        public username!: string;
        public email!: string;
        public password!: string;
        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;

        static associate(models: any) {
            // Contoh: User.hasMany(models.Post);
        }
    }

    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
        }
    );

    return User;
};
