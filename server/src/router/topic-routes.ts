import express from "express";
import {body} from "express-validator";
import {authMiddleware} from "../middlewares/auth-middleware";
import {Roles} from "../enums";
import topicController from "../controllers/topic-controller";

const router = express.Router()

router.post("/",
	body("topicName").notEmpty().withMessage("Please, enter topic name"),
	authMiddleware([Roles.admin]),
	topicController.create)

router.get("/", authMiddleware([Roles.admin]), topicController.get)

router.put("/:id", authMiddleware([Roles.admin]), topicController.update)

router.delete("/:id", authMiddleware([Roles.admin]), topicController.delete)

export default router
