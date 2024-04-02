import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RecipeForm } from "@modules/recipe/form"
import { CreateRecipeBody } from "@app/types/request/bodies"
import { CreateRecipeApiError } from "@app/types/errors"
import { useCreateRecipeMutation } from "@app/http/recipe-api"
import { useLocalStorage } from "usehooks-ts"

export const RecipeCreate = () => {
  const navigate = useNavigate()

  const [previewImage, setPreviewImage] = useState<{
    file: File | null
    url: string | null
  }>({
    file: null,
    url: null,
  })

  const changePreviewImage = (image: File | null) => {
    if (previewImage.url) URL.revokeObjectURL(previewImage.url)

    if (image === null) {
      setPreviewImage({ file: null, url: null })
    } else {
      setPreviewImage({ file: image, url: URL.createObjectURL(image) })
    }
  }

  const [recipeData, setRecipeData] = useLocalStorage<CreateRecipeBody>(
    "create-recipe-data",
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

  const [errors, setErrors] = useState<CreateRecipeApiError>({})

  const [createRecipe] = useCreateRecipeMutation()

  /** Function responsible for sending create request */
  const onCreate = () => {
    /** Show error for empty preview image */
    if (!previewImage.file) {
      setErrors((prev) => ({
        ...prev,
        previewImage: "Please, upload preview image.",
      }))
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    /** Execute createRecipe and process result */
    createRecipe({ data: recipeData, previewImage: previewImage.file })
      .unwrap()
      .then(() => {
        navigate("/home")
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
        setErrors(mappedErrors)
        if (!mappedErrors.default) window.scrollTo({ top: 0, behavior: "smooth" })
      })
  }

  return (
    <RecipeForm
      mode="create"
      recipeData={recipeData}
      setRecipeData={setRecipeData}
      previewImage={previewImage}
      changePreviewImage={changePreviewImage}
      errors={errors}
      setErrors={setErrors}
      onSubmit={onCreate}
    />
  )
}
