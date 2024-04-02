import { NextFunction, Request, Response } from "express"
import { CreateRecipeBody } from "../types/bodies"
import { validationResult } from "express-validator"
import { ApiError } from "../exceptions/api-error"
import recipeService from "../services/recipe-service"
import { mapQueryToRecipesParams } from "../helpers/mapQueryToParams"

class RecipeController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        throw ApiError.BadRequest("Validation error", errors.mapped())
      }

      if (!req.file) {
        throw ApiError.BadRequest("Preview image is required", {
          previewImage: { msg: "Preview image is required" },
        })
      }

      const userId = req.payload?.userId

      const body: CreateRecipeBody = {
        ...req.body,
        previewImageLink: req.file.filename,
        userId: userId,
      }

      const result = await recipeService.create(body)
      return res.json(result)
    } catch (e) {
      return next(e)
    }
  }

  async getTodaySelection(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await recipeService.getTodaySelection()
      return res.json(result)
    } catch (e) {
      return next(e)
    }
  }

  async getNewest(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await recipeService.getNewest()
      return res.json(result)
    } catch (e) {
      return next(e)
    }
  }

  async getFeatured(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await recipeService.getFeatured()
      return res.json(result)
    } catch (e) {
      return next(e)
    }
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const params = mapQueryToRecipesParams(req.query)

      const results = await recipeService.get(params)
      return res.json(results)
    } catch (e) {
      return next(e)
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      if (!id) throw new Error()
      if (isNaN(Number(id))) throw ApiError.BadRequest("Incorrect recipe id")

      const results = await recipeService.getOne(Number(id))

      return res.json(results)
    } catch (e) {
      return next(e)
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      if (!id) throw new Error()
      if (isNaN(Number(id))) throw ApiError.BadRequest("Incorrect recipe id")

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        throw ApiError.BadRequest("Validation error", errors.mapped())
      }

      const body = {
        ...req.body,
      }

      if (
        req.files &&
        !(req.files instanceof Array) &&
        req.files.previewImage?.[0]
      ) {
        body.previewImageLink = req.files.previewImage[0].filename
      }

      const result = await recipeService.update(Number(id), body)

      return res.status(200).json({ message: "Ok" })
    } catch (e) {
      return next(e)
    }
  }
}

export default new RecipeController()
