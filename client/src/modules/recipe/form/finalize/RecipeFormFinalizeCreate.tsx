import React from "react"
import styles from "./RecipeFormFinalize.module.scss"
import { Section } from "@components/ui/section"
import { Button } from "@components/ui/button"
import { CreateRecipeApiError } from "@app/types/errors"

type RecipeFormFinalizeCreateProps = {
  errors: CreateRecipeApiError
  onSubmit: () => void
}

export const RecipeFormFinalizeCreate = ({ errors, onSubmit }: RecipeFormFinalizeCreateProps) => {
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
      <Button
        styleType={"filled"}
        onClick={onSubmit}
        className={styles.publishRecipeButton}
      >
        PUBLISH RECIPE
      </Button>
    </Section>
  )
}