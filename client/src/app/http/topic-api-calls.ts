import $api, {API_URL} from "@app/http/index";
import {TopicsResponse} from "@app/types/response/responses";


export const createTopic = async () => {

}


export const getTopics = async () => {
	const response = await $api.get<TopicsResponse>(`${API_URL}/topics`)
	return response
}
