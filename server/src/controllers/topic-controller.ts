import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";
import {ApiError} from "../exceptions/api-error";
import topicServices from "../services/topic-services";

export class RecipeController {
	async create(req: Request, res: Response, next: NextFunction) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				throw ApiError.BadRequest("Validation error", errors.mapped())
			}

			const { topicName } = req.body
			const result = await topicServices.create(topicName)

			return res.json(result)
		} catch (e) {
			return next(e)
		}
	}

	async get(req: Request, res: Response, next: NextFunction) {
		try {
			const result = await topicServices.get()
			return res.json(result)
		} catch (e) {
			return next(e)
		}
	}

	async update(req: Request, res: Response, next: NextFunction) {

	}

	async delete(req: Request, res: Response, next: NextFunction) {

	}
}

export default new RecipeController()