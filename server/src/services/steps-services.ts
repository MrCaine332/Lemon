import { Step } from "../entities/step.entity"
import { Recipe } from "../entities/recipe.entity"
import { AppDataSource } from "../../data-source"
import { Ingredient } from "../entities/ingredient.entity"

class StepsService {
  async create(step: Step, recipeId?: number) {
    await AppDataSource.getRepository(Step).save(
      recipeId
        ? {
          ...step,
          recipe: { id: recipeId },
        }
        : step
    )
  }

  async update(oldStep: Step, updatedStep: Step) {
    if (
      oldStep.stepName !== updatedStep.stepName ||
      oldStep.stepDescription !== updatedStep.stepDescription
    ) {
      await AppDataSource.getRepository(Step).update(oldStep.id, updatedStep)
    }
  }

  async delete(id: number) {
    await AppDataSource.getRepository(Step).delete(id)
  }

  async updateRecipe(recipe: Recipe, steps: Step[]) {
    for (let recipeStep of recipe.steps) {
      const existingStep = steps.find(
        (bodyStep) => bodyStep.id === recipeStep.id
      )
      if (!existingStep) {
        await this.delete(recipeStep.id)
      }
    }

    for (let bodyStep of steps) {
      const existingStep = recipe.steps.find(
        (recipeStep) => recipeStep.id === bodyStep.id
      )
      if (!existingStep) {
        await this.create(bodyStep, recipe.id)
      } else {
        await this.update(existingStep, bodyStep)
      }
    }
  }
}

export default new StepsService()