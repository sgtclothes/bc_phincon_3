export interface DBConfig {
    username: string;
    password: string | null;
    database: string;
    host: string;
    dialect: string;
    use_env_variable?: string;
}
