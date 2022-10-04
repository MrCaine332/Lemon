import {IFormCredentials, IRecipe, IUser} from "./models";

export interface IAuthState {
    isAuthenticated: boolean
    user: IUser
    isFetching: boolean
    formType: {
        type: string
        text: string
    }
    formCredentials: IFormCredentials
}

export interface IHomeState {
    sliderRecipes: IRecipe[]
    newestRecipes: IRecipe[]
    searchString: string
    featuredRecipes: {
        easyRecipes: IRecipe[]
        mediumRecipes: IRecipe[]
        hardRecipes: IRecipe[]
    }
}

export interface IRecipesState {
    recipes: IRecipe[]
    recipesToDisplay: IRecipe[]
    pageRecipe: IRecipe | null
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

export interface INewRecipeSlice {
    title: string
    description: string
    mainImage: any
    ingredients: {
        ingredientName: string
        quantity: string
    }[]
    steps: {
        stepDescription: string
    }[]
    moreImages: any[]
}