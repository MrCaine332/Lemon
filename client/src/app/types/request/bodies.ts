import { Ingredient, Step } from "@app/types/request/models"

export type LoginCredentials = {
  email: string
  password: string
  rememberMe: boolean
}

export type RegistrationCredentials = {
  email: string
  username: string
  password: string
  passwordConfirmation: string
}

export type CreateRecipeBody = {
  title: string
  topicId: number | null
  description: string
  cookingTime: number | null
  difficulty: "EASY" | "MEDIUM" | "HARD" | null
  ingredients: Ingredient[]
  steps: Step[]
}
