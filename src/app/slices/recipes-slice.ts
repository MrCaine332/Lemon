import {createSlice} from "@reduxjs/toolkit";
import {IRecipesState} from "../../types";


const initialState: IRecipesState = {
    recipes: [],
    recipeToDisplay: null
}

const recipesSlice = createSlice({
    name: "recipes",
    initialState: initialState,
    reducers: {
        setRecipes(state, action) {
            return {...state, recipes: [...action.payload]}
        },
        setRecipeToDisplay(state, action) {
            return {...state, recipeToDisplay: {...action.payload}}
        }

    }
})

const { actions, reducer } = recipesSlice

export const recipesActions = actions

export default reducer