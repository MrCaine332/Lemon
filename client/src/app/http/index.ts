import axios from 'axios';
import {logout} from "@app/http/user-api-calls";
import store from "@app/store/store";
import {authActions} from "@app/store/slices/auth-slice";

export const API_URL = `http://localhost:5000/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('user-token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (originalRequest.url.includes("refresh"))
        throw error

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.post(`${API_URL}/users/refresh`)
            localStorage.setItem('user-token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            logout()
            localStorage.removeItem('user-token')
            store.dispatch(authActions.logout())
        }
    }

    throw error;
})

export default $api;
