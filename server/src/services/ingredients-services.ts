import { Ingredient } from "../entities/ingredient.entity"
import { Recipe } from "../entities/recipe.entity"
import { AppDataSource } from "../../data-source"
import { Step } from "../entities/step.entity"

class IngredientsService {
  async create(ingredient: Ingredient, recipeId?: number) {
    await AppDataSource.getRepository(Ingredient).save(
      recipeId
        ? {
            ...ingredient,
            recipe: { id: recipeId },
          }
        : ingredient
    )
  }

  async update(oldIngredient: Ingredient, updatedIngredient: Ingredient) {
    if (
      oldIngredient.ingredientName !== updatedIngredient.ingredientName ||
      oldIngredient.ingredientAmount !== updatedIngredient.ingredientAmount
    ) {
      await AppDataSource.getRepository(Ingredient).update(
        oldIngredient.id,
        updatedIngredient
      )
    }
  }

  async delete(id: number) {
    await AppDataSource.getRepository(Ingredient).delete(id)
  }

  async updateRecipe(recipe: Recipe, ingredients: Ingredient[]) {
    for (let recipeIngredient of recipe.ingredients) {
      const existingIngredient = ingredients.find(
        (bodyIngredient) => bodyIngredient.id === recipeIngredient.id
      )
      if (!existingIngredient) {
        await this.delete(recipeIngredient.id)
      }
    }

    for (let bodyIngredient of ingredients) {
      const existingIngredient = recipe.ingredients.find(
        (recipeIngredient) => recipeIngredient.id === bodyIngredient.id
      )
      if (!existingIngredient) {
        await this.create(bodyIngredient, recipe.id)
      } else {
        await this.update(existingIngredient, bodyIngredient)
      }
    }
  }
}

export default new IngredientsService()
