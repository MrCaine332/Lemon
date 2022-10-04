import {AppDispatch, RootState} from "../store";
import $api from "../http";
import {authActions} from "../slices/auth-slice";
import axios from "axios";

export const API_URL = `http://localhost:5000/api`


export const login = () => {
    return async (dispatch: AppDispatch, getState: any) => {
        try {
            dispatch(authActions.setIsFetching(true))
            const { login, password } = getState().auth.formCredentials
            const response = await $api.post("/login", {login, password}, {withCredentials: true})
            localStorage.setItem("USER_TOKEN", response.data.accessToken)
            dispatch(authActions.login(response.data.user))
        } catch (e) {

        } finally {
            dispatch(authActions.setIsFetching(false))
        }
    }
}

export const logout = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(authActions.setIsFetching(true))
            await $api.post("/logout", {withCredentials: true})
            localStorage.removeItem("USER_TOKEN")
            dispatch(authActions.logout())
        } catch (e) {

        } finally {
            dispatch(authActions.setIsFetching(false))
        }
    }
}




export const registration = () => {
    return async (dispatch: AppDispatch, getState: any) => {
        try {
            dispatch(authActions.setIsFetching(true))
            // const { email, username, password, confirmedPassword } = getState().auth.formCredentials
            // const response = await $api.post("/login", {login, password}, {withCredentials: true})
            // localStorage.setItem("USER_TOKEN", response.data.accessToken)
            // dispatch(authActions.login(response.data.user))
        } catch (e) {

        } finally {
            dispatch(authActions.setIsFetching(false))
        }
    }
}




export const checkAuth = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(authActions.setIsAuthenticated(false))
        try {
            dispatch(authActions.setIsFetching(true))
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('USER_TOKEN', response.data.accessToken);
            dispatch(authActions.login(response.data.user))
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(authActions.setIsFetching(false))
        }
    }
}