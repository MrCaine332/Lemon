import express from "express"
import recipeController from "../controllers/recipe-controller"
import { authMiddleware } from "../middlewares/auth-middleware"
import { body } from "express-validator"
import { upload } from "../helpers/multer"
import { JSONToBody } from "../middlewares/JSON-to-body-middleware"
import { removeCreatedFilesIfError } from "../middlewares/remove-created-files-if-error-middleware"

const router = express.Router()

router.post(
  "/",
  authMiddleware(),
  upload.single("previewImage"),
  JSONToBody("data"),
  body("title").notEmpty().withMessage("Please, enter recipe title"),
  body("difficulty").notEmpty().withMessage("Please, choose difficulty"),
  body("cookingTime")
    .notEmpty()
    .withMessage("Please, enter approximate cooking time")
    .isNumeric()
    .withMessage("Please, enter approximate cooking time"),
  body("topicId").notEmpty().withMessage("Please, choose topic"),
  body("ingredients")
    .isArray({ min: 1 })
    .withMessage("Please, add at least one ingredient"),
  body("steps")
    .isArray({ min: 1 })
    .withMessage("Please, write at least one step"),
  recipeController.create,
  removeCreatedFilesIfError
)

router.get("/today", recipeController.getTodaySelection)
router.get("/newest", recipeController.getNewest)
router.get("/featured", recipeController.getFeatured)

router.get("/", recipeController.get)
router.get("/:id", recipeController.getOne)

router.put(
  "/:id",
  authMiddleware(),
  upload.fields([{ name: "previewImage", maxCount: 1 }]),
	JSONToBody("data"),
	body("title").notEmpty().withMessage("Please, enter recipe title"),
	body("difficulty").notEmpty().withMessage("Please, choose difficulty"),
	body("cookingTime")
		.notEmpty()
		.withMessage("Please, enter approximate cooking time")
		.isNumeric()
		.withMessage("Please, enter approximate cooking time"),
	body("topicId").notEmpty().withMessage("Please, choose topic"),
	body("ingredients")
		.isArray({ min: 1 })
		.withMessage("Please, add at least one ingredient"),
	body("steps")
		.isArray({ min: 1 })
		.withMessage("Please, write at least one step"),
  recipeController.update,
	removeCreatedFilesIfError
)

export default router
