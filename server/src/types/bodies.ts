import {Ingredient} from "../entities/ingredient.entity";
import {Step} from "../entities/step.entity";

export type CreateRecipeBody = {
	title: string
	description: string
	cookingTime: number
	difficulty: string
	topicId: number
	previewImageLink: string
	userId: number
	ingredients: Ingredient[]
	steps: Step[]
}