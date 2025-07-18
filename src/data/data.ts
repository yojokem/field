import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Police68194818!",
    database: "field",
    synchronize: true,
    logging: true,
    entities: ["/data/entity/*.ts"],
});