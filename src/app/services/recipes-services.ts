import {AppDispatch} from "../store";
import recipesData from "../../data/recipes.json"
import {recipesActions} from "../slices/recipes-slice";
import recipe from "../../layouts/recipe/Recipe";

export const getRecipes = () => {
    return (dispatch: AppDispatch) => {
        const recipesDataCopy = [...recipesData]
        dispatch(recipesActions.setRecipes(recipesDataCopy))
    }
}

export const getRecipeById = (id: number) => {
    return (dispatch: AppDispatch) => {
        const recipesDataCopy = [...recipesData]
        const recipeToSend = recipesDataCopy.find(recipe => recipe._id === id)
        dispatch(recipesActions.setPageRecipe(recipeToSend))
    }
}