import {createSlice} from "@reduxjs/toolkit";
import {INewRecipeSlice} from "../../types";

const initialState: INewRecipeSlice = {
    description: "",
    ingredients: [],
    mainImage: null,
    moreImages: [],
    steps: [],
    title: ""
}

const NewRecipeSlice = createSlice({
    name: "New Recipe",
    initialState: initialState,
    reducers: {
        setNewRecipeInfo(state, action) {
            state[action.payload.field as keyof typeof initialState ] = action.payload.value
        },
    }
})

const { actions, reducer } = NewRecipeSlice

export const newRecipeActions = actions

export default reducer
