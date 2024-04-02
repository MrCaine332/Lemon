export type User = {
  id: number
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
  topic: {
    id: number,
    topicName: string
  }
  commentsNo: number
  viewsNo: number
  author: User
  createdAt: string
  previewImageLink: string
  steps: Step[]
  ingredients: Ingredient[]
}
