import express, {NextFunction, Request, Response} from "express";
import {authMiddleware} from "../middlewares/auth-middleware";
import {Roles} from "../enums";

const router = express.Router()

const getRouter = (req: Request, res: Response, next: NextFunction) => {
	try {
		return res.json({msg: ""})
	} catch (e) {
		return next(e)
	}
}


router.get("/router", getRouter)

const testGet = async (req: Request, res: Response, next: NextFunction) => {
	return res.sendStatus(200)
}
router.get("/admin", authMiddleware([Roles.admin]), testGet)


export default router
