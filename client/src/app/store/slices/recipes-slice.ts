import {createSlice} from "@reduxjs/toolkit";
import {IRecipesState} from "@app/types/store";

const initialState: IRecipesState = {
    recipes: [],
    recipesToDisplay: [],
    pageRecipe: null,
    filters: {
        keyword: "",
        tags: [],
        difficulty: "ANY",
        cookingTimeFrom: "0",
        cookingTimeTo: "0",
        publishedFrom: "",
        publishedTo: ""
    }
}

const recipesSlice = createSlice({
    name: "recipes",
    initialState: initialState,
    reducers: {
        setRecipes(state, action) {
            return {...state, recipes: [...action.payload]}
        },
        setPageRecipe(state, action) {
            return {...state, recipeToDisplay: {...action.payload}}
        },
        setFilterField(state, action) {
            state.filters[action.payload.field as keyof typeof state.filters] = action.payload.value
        }
    }
})

const { actions, reducer } = recipesSlice

export const recipesActions = actions

export default reducer