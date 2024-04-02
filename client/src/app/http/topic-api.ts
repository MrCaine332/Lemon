import { api } from "@app/http/index"
import { Recipe } from "@app/types/response/models"
import { FeaturedRecipesResponse, TopicsResponse } from "@app/types/response/responses"
import { RecipesParams } from "@app/types/params"

export const topicsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTopics: build.query<TopicsResponse, void>({
      query: () => ({ url: "topics" }),
    }),
  }),
})

export const {
  useGetTopicsQuery
} = topicsApi

export const {
  endpoints: { getTopics },
} = topicsApi
