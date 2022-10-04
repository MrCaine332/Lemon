import {createSlice} from "@reduxjs/toolkit";
import {IHomeState} from "../../types/slices";


const initialState: IHomeState = {
    sliderRecipes: [],
    newestRecipes: [],
    searchString: "",
    featuredRecipes: {
        easyRecipes: [],
        mediumRecipes: [],
        hardRecipes: []
    }
}

const homeSlice = createSlice({
    name: "home",
    initialState: initialState,
    reducers: {
        setSliderRecipes(state, action) {
            return {...state, sliderRecipes: action.payload}
        },
        setNewest(state, action) {
            return {...state, newestRecipes: action.payload}
        },
        setFeaturedRecipes(state, action) {
            return {...state, featuredRecipes: {
                    easyRecipes: action.payload.easyRecipes,
                    mediumRecipes: action.payload.mediumRecipes,
                    hardRecipes: action.payload.hardRecipes
                }}
        },
        setSearchString(state, action) {
            state.searchString = action.payload
        }
    }
})

const { actions, reducer } = homeSlice

export const homeActions = actions

export default reducer