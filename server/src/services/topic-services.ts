import {Topic} from "../entities/topic.entity";
import {AppDataSource} from "../../data-source";

class TopicService {
	async create(topicName: string) {
		const topic = new Topic()
		topic.topicName = topicName
		const result = await AppDataSource.getRepository(Topic).save(topic)
		return result
	}

	async get() {
		const topics = await AppDataSource.getRepository(Topic).find()
		return topics
	}

	async updated() {

	}

	async delete() {

	}
}

export default new TopicService()