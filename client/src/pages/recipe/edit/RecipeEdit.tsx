import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { RecipeForm } from "@modules/recipe/form"
import { CreateRecipeBody } from "@app/types/request/bodies"
import { CreateRecipeApiError } from "@app/types/errors"
import {
  useGetRecipeByIdQuery,
  useUpdateRecipeMutation,
} from "@app/http/recipe-api"
import { API_URL } from "@app/http"
import { useAppSelector } from "@app/store/store"

export const RecipeEdit = () => {
  const navigate = useNavigate()
  const id = useParams().id
  const { user } = useAppSelector((state) => state.auth)

  /** Set default empty preview image */
  const [previewImage, setPreviewImage] = useState<{
    file: File | null
    url: string | null
  }>({
    file: null,
    url: null,
  })

  /** Change preview image */
  const changePreviewImage = (image: File | null) => {
    if (previewImage.url) URL.revokeObjectURL(previewImage.url)

    if (image === null) {
      setPreviewImage({
        file: null,
        url: `${API_URL}/images/${recipe!.previewImageLink}`,
      })
    } else {
      setPreviewImage({ file: image, url: URL.createObjectURL(image) })
    }
  }

  /** Default recipe data */
  const [recipeData, setRecipeData] = useState<CreateRecipeBody>(
    {
      title: "",
      description: "",
      topicId: null,
      cookingTime: null,
      difficulty: null,
      ingredients: [],
      steps: [],
    }
  )

  /** Fetch recipe by id */
  const { isLoading, data: recipe } = useGetRecipeByIdQuery(Number(id))

  /** Fill preview image and recipe data from response */
  useEffect(() => {
    if (!recipe && !isLoading) {
      navigate("/recipes")
      return
    }

    if (recipe) {
      if (recipe.author.id !== user?.id) {
        navigate(`/recipe/${id}`)
        return
      }

      setPreviewImage({
        file: null,
        url: `${API_URL}/images/${recipe.previewImageLink}`,
      })
      setRecipeData({
        title: recipe.title,
        description: recipe.description,
        topicId: recipe.topic.id,
        cookingTime: recipe.cookingTime,
        difficulty: recipe.difficulty as "EASY" | "MEDIUM" | "HARD",
        ingredients: recipe.ingredients,
        steps: recipe.steps,
      })
    }
  }, [recipe, isLoading])

  const [errors, setErrors] = useState<CreateRecipeApiError>({})

  const [updateRecipe] = useUpdateRecipeMutation()

  /** Function responsible for sending create request */
  const onUpdate = () => {
    /** Show error for empty preview image */
    if (!previewImage.file && !previewImage.url) {
      setErrors((prev) => ({
        ...prev,
        previewImage: "Please, upload preview image.",
      }))
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const updateData = {
      ...recipeData,
      ingredients: [...recipeData.ingredients.filter((ingredient) => ingredient.ingredientName && ingredient.ingredientAmount)],
      steps: [...recipeData.steps.filter((step) => step.stepName && step.stepDescription)],
    }

    updateRecipe({ data: updateData, previewImage: previewImage.file, id: Number(id)})
      .unwrap()
      .then(() => {
        navigate(`/recipe/${id}`)
      })
      .catch((err) => {
        const mappedErrors: CreateRecipeApiError = {}
        if (err?.data?.errors && Object.keys(err.data.errors).length > 0) {
          for (let key in err.data.errors) {
            mappedErrors[key as keyof CreateRecipeApiError] = err.data.errors[key].msg
          }
        } else {
          const defaultErrorMessage =
            "We are sorry, something went wrong on our side. Please, try again later."
          mappedErrors.default = defaultErrorMessage
        }
        console.log(mappedErrors)
        setErrors(mappedErrors)
        if (!mappedErrors.default) window.scrollTo({ top: 0, behavior: "smooth" })
      })
  }

  return (
    <RecipeForm
      mode="edit"
      recipeData={recipeData}
      setRecipeData={setRecipeData}
      previewImage={previewImage}
      changePreviewImage={changePreviewImage}
      errors={errors}
      setErrors={setErrors}
      onSubmit={onUpdate}
    />
  )
}
