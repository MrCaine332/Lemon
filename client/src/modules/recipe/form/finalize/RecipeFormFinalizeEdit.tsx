import React from "react"
import styles from "./RecipeFormFinalize.module.scss"
import { CreateRecipeApiError } from "@app/types/errors"
import { Button } from "@components/ui/button"
import { Section } from "@components/ui/section"
import { CreateRecipeBody } from "@app/types/request/bodies"
import { useNavigate, useParams } from "react-router-dom"

type RecipeFormFinalizeEditProps = {
  errors: CreateRecipeApiError
  onSubmit: () => void
}

export const RecipeFormFinalizeEdit = ({ errors, onSubmit }: RecipeFormFinalizeEditProps) => {
  const navigate = useNavigate()
  const id = useParams().id

  const onCancel = () => {
    navigate(`/recipe/${id}`)
  }

  return (
    <Section className={styles.recipeFormFinalize}>
      <p className={"textBody " + styles.recipeFormFinalizeCaption}>
        In Lemon we respect all cooks around the world. Please, do not publish
        recipes that you found in other resources.
        <br />
        Published recipes are subject to our&nbsp;
        <Button className={styles.termsOfUseButton}>Terms Of Service</Button>.
      </p>
      {errors.default ? (
        <p className={"textBody " + styles.recipeFormDefaultError}>
          {errors.default}
        </p>
      ) : null}
      <div className={styles.recipeFormFinalizeButtonGroup}>
        <Button
          styleType={"outlined"}
          onClick={onCancel}
          className={styles.publishRecipeButton}
        >
          CANCEL
        </Button>
        <Button
          styleType={"filled"}
          onClick={onSubmit}
          className={styles.publishRecipeButton}
        >
          UPDATE RECIPE
        </Button>
      </div>
    </Section>
  )
}