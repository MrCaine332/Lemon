import React from "react"
import styles from "./Recipe.module.scss"
import { useParams } from "react-router-dom"
import { useGetRecipeByIdQuery } from "@app/http/recipe-api"
import { RecipeDescription } from "@modules/recipe/description/RecipeDescription"
import { RecipeSteps } from "@modules/recipe/steps"
import { RecipeIngredients } from "@modules/recipe/ingredients"
import { Helmet } from "react-helmet"

export const Recipe = () => {
  const id = useParams().id

  const { data: recipe, isLoading } = useGetRecipeByIdQuery(Number(id), {
    refetchOnMountOrArgChange: true,
  })

  return (
    <>
      <Helmet>
        <meta name="description" content={recipe?.description.substring(0, 200)} />
        <title>{ recipe?.title || "Recipe" }</title>
      </Helmet>
      <div className={"page " + styles.recipe}>
        <RecipeDescription recipe={recipe} />
        <div className={styles.recipe_twoCol}>
          <RecipeIngredients recipe={recipe} />
          <RecipeSteps recipe={recipe} />
        </div>
      </div>
    </>
  )
}
