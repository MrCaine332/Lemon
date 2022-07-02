import {createSlice} from "@reduxjs/toolkit";
import userData from "../../data/users.json"
import {IAuthState} from "../../types";


const initialState: IAuthState = {
    isAuthenticated: false,
    user: null,
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
            const candidate = userData.find(user =>
                user.email === action.payload.login || user.username === action.payload.login)
            if (candidate) {
                return {...state, user: candidate, isAuthenticated: true}
            }
        },
        logout(state) {
            return {...state, user: null, isAuthenticated: false}
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
    }
})


const { actions, reducer } = authSlice

export const authActions = actions

export default reducer