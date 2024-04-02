import { Recipe } from "@app/types/response/models"
import { RecipesParams } from "@app/types/params"
import { FeaturedRecipesResponse, GetRecipesResponse } from "@app/types/response/responses"
import { CreateRecipeBody } from "@app/types/request/bodies"
import { api } from "@app/http/index"

export const recipesApi = api.injectEndpoints({
  endpoints: (build) => ({
    createRecipe: build.mutation<Recipe[], { data: CreateRecipeBody, previewImage: File }>({
      query: (body) => {
        const formData = new FormData()
        formData.append("previewImage", body.previewImage)
        formData.append("data", JSON.stringify(body.data))

        return {
          url: "recipes",
          method: "POST",
          body: formData,
          formData: true
        }
      },
      extraOptions: {
        maxRetries: 0
      }
    }),

    updateRecipe: build.mutation<Recipe[], { data: CreateRecipeBody, previewImage: File | null, id: number }>({
      query: (body) => {
        const formData = new FormData()
        if (body.previewImage) {
          formData.append("previewImage", body.previewImage)
        }
        formData.append("data", JSON.stringify(body.data))

        return {
          url: `recipes/${body.id}`,
          method: "PUT",
          body: formData,
          formData: true
        }
      },
      extraOptions: {
        maxRetries: 0
      }
    }),

    getTodaySelection: build.query<Recipe[], void>({
      query: () => ({ url: "recipes/today" }),
    }),

    getNewest: build.query<Recipe[], void>({
      query: () => ({ url: "recipes/newest" }),
    }),

    getFeaturedRecipes: build.query<FeaturedRecipesResponse, void>({
      query: () => ({ url: "recipes/featured" }),
    }),

    getRecipes: build.query<GetRecipesResponse, RecipesParams>({
      query: (params) => ({ url: "recipes", params: params }),
    }),

    getRecipeById: build.query<Recipe, number>({
      query: (id) => ({ url: `recipes/${id}` }),
    }),
  }),
})

export const {
  useCreateRecipeMutation,
  useUpdateRecipeMutation,

  useGetRecipesQuery,
  useGetRecipeByIdQuery,
  useGetTodaySelectionQuery,
  useGetNewestQuery,
  useGetFeaturedRecipesQuery,
} = recipesApi

export const {
  endpoints: { getRecipes },
} = recipesApi
