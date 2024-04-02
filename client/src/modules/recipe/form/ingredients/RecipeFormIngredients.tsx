import React, { ChangeEvent, useEffect, useState } from "react"
import styles from "./RecipeFormIngredients.module.scss"
import { Section } from "@components/ui/section"
import { Input } from "@components/ui/input"
import { BlockTitle } from "@components/ui/block-title"
import { Button } from "@components/ui/button"
import { Divider } from "@components/ui/divider"
import Icons from "@components/ui/icons"
import { Ingredient } from "@app/types/request/models"
import { CreateRecipeBody } from "@app/types/request/bodies"
import { CreateRecipeApiError } from "@app/types/errors"

const placeholders: Ingredient[] = [
  { ingredientName: "e.g. Flour, sifted", ingredientAmount: "e.g. 2 cups" },
  { ingredientName: "e.g. Sugar", ingredientAmount: "e.g. 1 cup" },
  {
    ingredientName: "e.g. Butter, softened",
    ingredientAmount: "e.g. 2 tablespoons",
  },
]

const defaultIngredients = [
  { ingredientName: "", ingredientAmount: "" },
  { ingredientName: "", ingredientAmount: "" },
  { ingredientName: "", ingredientAmount: "" },
]

type RecipeFormIngredientsProps = {
  recipeData: CreateRecipeBody
  setRecipeData: React.Dispatch<React.SetStateAction<CreateRecipeBody>>
  errors: CreateRecipeApiError
  setErrors: React.Dispatch<React.SetStateAction<CreateRecipeApiError>>
}

export const RecipeFormIngredients = ({
  recipeData,
  setRecipeData,
  errors,
  setErrors,
}: RecipeFormIngredientsProps) => {
  useEffect(() => {
    if (recipeData.ingredients.length === 0) {
      setRecipeData((prev) => ({ ...prev, ingredients: defaultIngredients }))
    }
  }, [recipeData.ingredients.length])

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof Ingredient,
    index: number
  ) => {
    const newIngredients = [
      ...recipeData.ingredients.map((ingredient) => ({ ...ingredient })),
    ]
    newIngredients[index][field] = e.target.value
    setRecipeData((prev) => ({ ...prev, ingredients: newIngredients }))
    if (errors.ingredients) setErrors((prev) => ({ ...prev, ingredients: "" }))
  }

  const onIngredientRemove = (index: number) => {
    const newIngredients = [...recipeData.ingredients]
    newIngredients.splice(index, 1)
    setRecipeData((prev) => ({ ...prev, ingredients: newIngredients }))
  }

  const onAddIngredient = () => {
    const newIngredients = [...recipeData.ingredients]
    newIngredients.push({ ingredientName: "", ingredientAmount: "" })
    setRecipeData((prev) => ({ ...prev, ingredients: newIngredients }))
    if (errors.ingredients) setErrors((prev) => ({ ...prev, ingredients: "" }))
  }

  return (
    <Section className={styles.recipeFormIngredients} noPadding>
      <BlockTitle
        title={"Ingredients"}
        className={styles.recipeFormIngredientsTitle}
      />

      <div className={styles.recipeFormIngredientsBody}>
        <p
          className={["textBody", styles.recipeFormIngredientsGuide].join(" ")}
        >
          Enter one ingredient per line. Write ingredient name (i.e. tomato, soy
          sauce, cabbage) and any special preparation (i.e. sifted, softened,
          chopped) in the first field. Write the quantity (i.e. 300 gram, 2
          tablespoons, 1 cup) in the second field.
        </p>

        <Divider />

        {errors.ingredients ? (
          <p className={"textBody " + styles.recipeFormIngredientsError}>
            {errors.ingredients}
          </p>
        ) : null}

        <div className={styles.recipeFormIngredientsList}>
          {recipeData.ingredients.map((ingredient, index) => (
            <div className={styles.ingredientInputsGroup} key={index}>
              <Input
                wrapperClassName={styles.ingredientNameWrapper}
                onChange={(e) => onInputChange(e, "ingredientName", index)}
                value={ingredient.ingredientName}
                placeholder={
                  index < 3 ? placeholders[index].ingredientName : "Ingredient"
                }
              />

              <div className={styles.ingredientUtils}>
                <Input
                  wrapperClassName={styles.ingredientAmountWrapper}
                  onChange={(e) => onInputChange(e, "ingredientAmount", index)}
                  value={ingredient.ingredientAmount}
                  placeholder={
                    index < 3 ? placeholders[index].ingredientAmount : "Amount"
                  }
                />
                <Button
                  styleType={"outlined"}
                  onClick={() => onIngredientRemove(index)}
                  className={styles.removeIngredientButton}
                >
                  <Icons name={"close"} size={24} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.addIngredientButton}>
          <Button styleType={"outlined"} onClick={onAddIngredient}>
            ADD INGREDIENT
          </Button>
        </div>
      </div>
    </Section>
  )
}
