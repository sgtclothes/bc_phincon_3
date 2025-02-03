import dotenv from "dotenv";
import { DBConfig } from "../types/config.type";

dotenv.config();

const config: Record<string, DBConfig> = {
    development: {
        use_env_variable: process.env.DATABASE_URL_DEVELOPMENT,
        username: process.env.DB_USERNAME_DEVELOPMENT ?? "root",
        password: process.env.DB_PASSWORD_DEVELOPMENT ?? null,
        database: process.env.DB_DATABASE_DEVELOPMENT ?? "database_development",
        host: process.env.DB_HOST_DEVELOPMENT ?? "localhost",
        dialect: process.env.DB_DIALECT_DEVELOPMENT ?? "mysql",
    },
    test: {
        use_env_variable: process.env.DATABASE_URL_TEST,
        username: process.env.DB_USERNAME_TEST ?? "root",
        password: process.env.DB_PASSWORD_TEST ?? null,
        database: process.env.DB_DATABASE_TEST ?? "database_test",
        host: process.env.DB_HOST_TEST ?? "127.0.0.1",
        dialect: process.env.DB_DIALECT_TEST ?? "mysql",
    },
    production: {
        use_env_variable: process.env.DATABASE_URL_PRODUCTION,
        username: process.env.DB_USERNAME_PRODUCTION ?? "root",
        password: process.env.DB_PASSWORD_PRODUCTION ?? null,
        database: process.env.DB_DATABASE_PRODUCTION ?? "database_production",
        host: process.env.DB_HOST_PRODUCTION ?? "127.0.0.1",
        dialect: process.env.DB_DIALECT_PRODUCTION ?? "mysql",
    },
};

export default config;
