import React from "react"
import styles from "./RecipeForm.module.scss"
import { CreateRecipeApiError } from "@app/types/errors"
import { CreateRecipeBody } from "@app/types/request/bodies"
import { Section } from "@components/ui/section"
import { BlockTitle } from "@components/ui/block-title"
import { RecipeFormDescription } from "@modules/recipe/form/description"
import { RecipeFormIngredients } from "@modules/recipe/form/ingredients"
import { RecipeFormSteps } from "@modules/recipe/form/steps"
import {
  RecipeFormFinalizeCreate,
  RecipeFormFinalizeEdit,
} from "@modules/recipe/form/finalize"

type RecipeFormBaseProps = {
  recipeData: CreateRecipeBody
  setRecipeData: React.Dispatch<React.SetStateAction<CreateRecipeBody>>
  previewImage: { file: File | null; url: string | null }
  changePreviewImage: (image: File | null) => void
  errors: CreateRecipeApiError
  setErrors: React.Dispatch<React.SetStateAction<CreateRecipeApiError>>
}

type RecipeFormProps = RecipeFormBaseProps & {
  mode: "create" | "edit"
  onSubmit: () => void
}

export const RecipeForm = ({
  mode,
  recipeData,
  setRecipeData,
  previewImage,
  changePreviewImage,
  errors,
  setErrors,
  onSubmit,
}: RecipeFormProps) => {
  return (
    <div className={"page " + styles.recipeForm}>
      <Section>
        <BlockTitle className={styles.recipeFormTitle} title={"Add Recipe"} />
      </Section>
      <RecipeFormDescription
        recipeData={recipeData}
        setRecipeData={setRecipeData}
        previewImage={previewImage}
        changePreviewImage={changePreviewImage}
        errors={errors}
        setErrors={setErrors}
      />
      <div className={styles.recipeForm_twoCol}>
        <RecipeFormIngredients
          recipeData={recipeData}
          setRecipeData={setRecipeData}
          errors={errors}
          setErrors={setErrors}
        />

        <RecipeFormSteps
          recipeData={recipeData}
          setRecipeData={setRecipeData}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
      {mode === "create" ? (
        <RecipeFormFinalizeCreate errors={errors} onSubmit={onSubmit} />
      ) : (
        <RecipeFormFinalizeEdit errors={errors} onSubmit={onSubmit} />
      )}
    </div>
  )
}
