import express from 'express'
import 'dotenv/config'
import cookieParser from "cookie-parser";
import cors from 'cors'
import router from './src/router'
import {errorMiddleware} from "./src/middlewares/error-middleware";
import {AppDataSource} from "./data-source";
import {TokenPayload} from "./src/types/token-payload";
import {JwtPayload} from "jsonwebtoken";

declare global {
	namespace Express {
		interface Request {
			payload?: JwtPayload & TokenPayload
		}
	}
}

const app = express()

const main = async () => {
	await AppDataSource
		.initialize()
		.then(() => console.log("Data Source has been initialized"))
		.catch((err) => console.error("Error during Data Source initialization:", err))

	const corsOptions ={
		origin: 'http://localhost:3000',
		credentials: true,            //access-control-allow-credentials:true
		optionSuccessStatus: 200
	}

	app.use(express.json())
	app.use(cookieParser())
	app.use(cors(corsOptions))
	app.use("/api", router)
	app.use("/api/images", express.static(__dirname + "/images"))
	app.use(errorMiddleware)

	const PORT = process.env.PORT || 5000

	app.listen(PORT, () => {
		console.log(`Server started on port: ${PORT}`)
	})
}

main()