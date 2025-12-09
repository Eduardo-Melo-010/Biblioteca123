import "reflect-metadata"
import { DataSource } from "typeorm"
import { config } from "../config/db.config"
import { Livro } from "../model/livro"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "biblioteca123",
    entities: [Livro],
    synchronize: false,
    logging: false,
})