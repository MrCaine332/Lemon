import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "../../types";

const initialState: IAuthState = {
    isAuthenticated: false,
    user: {
        id: "",
        email: "",
        username: "",
        role: "",
        isActivated: false
    },
    isFetching: false,
    formType: {
        type: "LOGIN",
        text: "Sign In"
    },
    formCredentials: {
        login: "",
        email: "",
        username: "",
        password: "",
        confirmedPassword: ""
    }
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
            // return {...state, user: null, isAuthenticated: false}
            state.user = initialState.user
            state.isAuthenticated = false
        },
        register(state) {

        },
        setFetching(state, action) {
            return {...state, isFetching: !state.isFetching}
        },
        toggleFormType(state) {
            if (state.formType.type === "LOGIN")
                return {...state,
                    formType: {...state.formType, type: "REGISTRATION", text: "Sign Up"},
                    formCredentials: {...initialState.formCredentials} }
            if (state.formType.type === "REGISTRATION")
                return {...state, 
                    formType: {...state.formType, type: "LOGIN", text: "Sign In"},
                    formCredentials: {...initialState.formCredentials} }
        },
        setFormCredentials(state, action) {
            return {...state,
                formCredentials: {...state.formCredentials,
                    [action.payload.field]: action.payload.value}}
        },
        setIsFetching(state, action) {
            state.isFetching = action.payload
        },
        setIsAuthenticated(state, action) {
            state.isAuthenticated = action.payload
        }
    }
})

const { actions, reducer } = authSlice

export const authActions = actions

export default reducer