export type CreateRecipeApiError = {
  cookingTime?: string
  description?: string
  difficulty?: string
  ingredients?: string
  previewImage?: string
  steps?: string
  title?: string
  topicId?: string
  default?: string
}

export type LoginApiError = {
  login?: string
  default?: string
}

export type RegistrationApiError = {
  email?: string
  username?: string
  password?: string
  passwordConfirmation?: string
  default?: string
}
