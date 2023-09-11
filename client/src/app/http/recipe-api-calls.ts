import $api, {API_URL} from "@app/http/index";
import {CreateRecipeData} from "@app/types/request/bodies";
import {Recipe} from "@app/types/response/models";
import {RecipesParams} from "@app/types/params";
import {FeaturedRecipesResponse} from "@app/types/response/responses";

export const createRecipe = async (data: CreateRecipeData, previewImage: File) => {
		const formData = new FormData()

		formData.append("previewImage", previewImage)
		// formData.append("images", data.previewImage)
		// formData.append("images", data.previewImage)

		formData.append("data", JSON.stringify(data))

		const response = await $api.post<Recipe>(`${API_URL}/recipes`, formData,
			{ headers: {'Content-Type': 'multipart/form-data'}}
		)
		return response
}

export const getTodaySelection = async () => {
	const response = await $api.get<Recipe[]>(`${API_URL}/recipes/today`)
	return response
}

export const getNewest = async () => {
	const response = await $api.get<Recipe[]>(`${API_URL}/recipes/newest`)
	return response
}

export const getFeaturedRecipes = async () => {
	const response = await $api.get<FeaturedRecipesResponse>(`${API_URL}/recipes/featured`)
	return response
}

export const getRecipes = async (params: RecipesParams) => {
	const response = await $api.get<Recipe[]>(`${API_URL}/recipes`, { params: params })
	return response
}

