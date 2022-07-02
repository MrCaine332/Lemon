import {createSlice} from "@reduxjs/toolkit";

const styleSlice = createSlice({
    name: "style",
    initialState: {
        windowHeight: 0,
        windowWidth: 0
    },
    reducers: {
        setWindowDimension(state, action) {
            return {...state, windowWidth: action.payload.windowWidth, windowHeight: action.payload.windowHeight}
        }
    }
})

const { actions, reducer } = styleSlice

export const styleActions = actions

export default reducer