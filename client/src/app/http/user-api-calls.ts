import $api, {API_URL} from "@app/http/index";
import {LoginResponse} from "@app/types/response/responses";
import {LoginCredentials, RegistrationCredentials} from "@app/types/request/bodies";

export const registration = async (credentials: RegistrationCredentials) => {
	const response = await $api.post(`${API_URL}/users/registration`, { ...credentials }, {withCredentials: true})
	return response
}

export const login = async (credentials: LoginCredentials) => {
	const response = await $api.post<LoginResponse>(`${API_URL}/users/login`, { ...credentials }, {withCredentials: true})
	localStorage.setItem('user-token', response.data.accessToken)
	return response
}

export const logout = async () => {
	const response = await $api.post(`${API_URL}/users/logout`)
	return response
}

export const refresh = async () => {
	const response = await $api.post<LoginResponse>(`${API_URL}/users/refresh`, {}, {withCredentials: true})
	return response
}
