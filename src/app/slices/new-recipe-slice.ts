import {createSlice} from "@reduxjs/toolkit";
import {INewRecipeSlice} from "../../types/slices";

const initialState: INewRecipeSlice = {
    description: "",
    ingredients: [{ingredientName: "", quantity: ""}],
    mainImage: null,
    moreImages: [],
    steps: [{stepDescription: ""}],
    title: ""
}

const NewRecipeSlice = createSlice({
    name: "New Recipe",
    initialState: initialState,
    reducers: {
        setNewRecipeInfo(state, action) {
            state[action.payload.field as keyof typeof initialState ] = action.payload.value
        },
        addIngredient(state) {
            state.ingredients = [...state.ingredients, {ingredientName: "", quantity: ""}]
        },
        removeIngredient(state, action) {
            state.ingredients.splice(action.payload.index, 1)
        },

        setIngredient(state, action) {
            if (action.payload.field === "ingredientName")
                state.ingredients[action.payload.index].ingredientName = action.payload.value
            if (action.payload.field === "quantity")
                state.ingredients[action.payload.index].quantity = action.payload.value
        },

        addStep(state) {
            state.steps = [...state.steps, {stepDescription: ""}]
        },
        removeStep(state, action) {
            state.steps.splice(action.payload.index, 1)
        },
        setStep(state, action) {
            state.steps[action.payload.index].stepDescription = action.payload.value
        }
    }
})

const { actions, reducer } = NewRecipeSlice

export const newRecipeActions = actions

export default reducer
