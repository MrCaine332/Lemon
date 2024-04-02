import React from "react"
import styles from "./RecipeIngredients.module.scss"
import { Section } from "@components/ui/section"
import { BlockTitle } from "@components/ui/block-title"
import { Recipe } from "@app/types/response/models"

type RecipeIngredientsProps = {
  recipe?: Recipe
}

export const RecipeIngredients = ({ recipe }: RecipeIngredientsProps) => {
  return (
    <Section className={styles.recipeIngredients} noPadding>
      <BlockTitle
        title={"Ingredients"}
        className={styles.recipeIngredientsTitle}
      />
      <div className={styles.recipeIngredientsBody}>
        {recipe?.ingredients.map((ingredient, index) => (
          <React.Fragment key={index}>
            <div className={styles.recipeIngredientsItem}>
              <p className="textBody">{ ingredient.ingredientName }, { ingredient.ingredientAmount }</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Section>
  )
}