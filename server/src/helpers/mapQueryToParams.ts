import { ParsedQs } from "qs"
import { Difficulties, RecipesParams } from "../types/params"

export const mapQueryToRecipesParams = (query: ParsedQs) => {
  const topicId =
    !isNaN(Number(query.topicId)) && Number(query.topicId) > 0
      ? Number(query.topicId)
      : null
  const userId =
    !isNaN(Number(query.userId)) && Number(query.userId) > 0
      ? Number(query.topicId)
      : null

  const difficulties = ["EASY", "MEDIUM", "HARD"]

  const params: RecipesParams = {
    search: query.search ? (query.search as string) : "",
    difficulty: difficulties.includes(String(query.difficulty))
      ? (query.difficulty as Difficulties)
      : null,
    topicId: topicId,
    userId: userId,
    _limit: !isNaN(Number(query._limit)) ? Number(query._limit) : 10,
    _page: !isNaN(Number(query._page)) ? Number(query._page) : 10,
  }

  return params
}