import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "@app/types/store";

const initialState: IAuthState = {
    isAuthenticated: false,
    user: null,
    status: "INITIAL"
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload
            state.isAuthenticated = true
        },
        logout(state) {
            state.user = initialState.user
            state.isAuthenticated = false
        },
        refresh(state, action) {
            state.user = action.payload
            state.isAuthenticated = true
            state.status = "READY"
        },
        setIsAuthenticated(state, action) {
            state.isAuthenticated = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

const { actions, reducer } = authSlice

export const authActions = actions

export default reducer