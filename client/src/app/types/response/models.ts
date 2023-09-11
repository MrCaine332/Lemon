export type User = {
	id: string
	email: string
	username: string
	isActivated: boolean
	role: string
}

export type Step = {
	id: number
	stepName: string
	stepDescription: string
}

export type Ingredient = {
	id: number
	ingredientName: string
	ingredientAmount: string
}

export type Recipe = {
	id: number
	title: string
	description: string
	difficulty: string
	cookingTime: number
	topicId: number
	commentsNo: number
	viewsNo: number
	author: User
	createdAt: string
	previewImageLink: string
	steps: Step[]
	ingredients: Ingredient[]
}