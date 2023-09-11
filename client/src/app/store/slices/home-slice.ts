import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHomeState} from "@app/types/store";
import {Recipe} from "@app/types/response/models";


const initialState: IHomeState = {
    sliderRecipes: [],
    newestRecipes: [],
    featuredRecipes: {
        easy: [],
        medium: [],
        hard: []
    }
}

const homeSlice = createSlice({
    name: "home",
    initialState: initialState,
    reducers: {
        setSliderRecipes(state, action: PayloadAction<Recipe[]>) {
            state.sliderRecipes = action.payload
        },
        setNewest(state, action) {
            return {...state, newestRecipes: action.payload}
        },
        setFeaturedRecipes(state, action) {
            return {...state, featuredRecipes: {
                    easy: action.payload.easy,
                    medium: action.payload.medium,
                    hard: action.payload.hard
                }}
        },
    }
})

const { actions, reducer } = homeSlice

export const homeActions = actions

export default reducer