import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
	type: "mysql",
	host: process.env.MYSQL_HOST,
	port: 3306,
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	entities: ["src/entities/*.entity.ts"],
})