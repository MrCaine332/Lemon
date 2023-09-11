import express from "express";
import recipeController from "../controllers/recipe-controller";
import {authMiddleware} from "../middlewares/auth-middleware";
import {body} from "express-validator";
import {upload} from "../helpers/multer";
import {JSONToBody} from "../middlewares/JSON-to-body-middleware";
import {removeCreatedFilesIfError} from "../middlewares/remove-created-files-if-error-middleware";

const router = express.Router()

router.post("/",
	authMiddleware(),
	upload.fields([
		{ name: "previewImage", maxCount: 1 },
		{ name: "images" }
	]),
	JSONToBody("data"),
	body("title").notEmpty().withMessage("Please, enter recipe title"),
	body("difficulty").notEmpty().withMessage("Please, choose difficulty"),
	body("cookingTime")
		.notEmpty().withMessage("Please, enter approximate cooking time")
		.isNumeric().withMessage("Please, enter approximate cooking time"),
	body("topicId")
		.notEmpty().withMessage("Please, choose topic"),
	body("ingredients").isArray({min: 1}).withMessage("Please, write at least one ingredient"),
	body("steps").isArray({min: 1}).withMessage("Please, write at least one step"),
	recipeController.create,
	removeCreatedFilesIfError)

router.get("/today", recipeController.getTodaySelection)
router.get("/newest", recipeController.getNewest)
router.get("/featured", recipeController.getFeatured)

router.get("/", recipeController.get)
router.get("/:id", recipeController.getOne)
router.put("/:id", recipeController.update)
router.delete("/:id", recipeController.delete)

router.get("/image/:id", (req, res, next) => {
	try {
		return res.send()
	} catch (e) {
		return next(e)
	}
})

export default router
