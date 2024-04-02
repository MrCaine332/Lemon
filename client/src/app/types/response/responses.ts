import { Recipe, User } from "@app/types/response/models"

export type LoginResponse = {
  user: User
  accessToken: string
}

export type TopicsResponse = {
  id: number
  topicName: string
}[]

export type FeaturedRecipesResponse = {
  easy: Recipe[]
  medium: Recipe[]
  hard: Recipe[]
}

export type GetRecipesResponse = {
  recipes: Recipe[]
  total: number
}