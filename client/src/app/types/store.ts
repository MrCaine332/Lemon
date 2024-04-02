import { Recipe, User } from "@app/types/response/models"

export interface IAuthState {
  isAuthenticated: boolean
  user: User | null
  status: "INITIAL" | "PENDING" | "READY"
}

export interface IHomeState {
  sliderRecipes: Recipe[]
  newestRecipes: Recipe[]
  featuredRecipes: {
    easy: Recipe[]
    medium: Recipe[]
    hard: Recipe[]
  }
}

export interface IRecipesState {
  recipes: Recipe[]
  recipesToDisplay: Recipe[]
  pageRecipe: Recipe | null
  filters: {
    keyword: string
    tags: []
    difficulty: string
    cookingTimeFrom: string
    cookingTimeTo: string
    publishedFrom: string
    publishedTo: string
  }
}
