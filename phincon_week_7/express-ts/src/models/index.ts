import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import process from "process";
import configJson from "../config/database";
import { DBConfig } from "../types/config.type";

const basename = path.basename(__filename);
const env = (process.env.NODE_ENV as keyof typeof configJson) || "development";
const config: DBConfig = configJson[env];

interface DB {
    sequelize: Sequelize;
    Sequelize: typeof Sequelize;
    [key: string]: any;
}

const db: DB = { Sequelize } as DB;

let sequelize: Sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable] as string, config as any);
} else {
    sequelize = new Sequelize(config.database ?? "", config.username ?? "", config.password ?? "", config as any);
}

fs.readdirSync(__dirname)
    .filter((file) => file.endsWith(".ts") && file !== basename)
    .forEach((file) => {
        const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName]?.associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;

export default db;
