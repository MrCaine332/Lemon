import React from "react"
import styles from "./RecipeSteps.module.scss"
import { Recipe } from "@app/types/response/models"
import { Section } from "@components/ui/section"
import { BlockTitle } from "@components/ui/block-title"

type RecipeStepsProps = {
  recipe?: Recipe
}

export const RecipeSteps = ({ recipe }: RecipeStepsProps) => {
  return (
    <Section className={styles.recipeSteps} noPadding>
      <BlockTitle
        title={"Steps"}
        className={styles.recipeStepsTitle}
      />
      <div className={styles.recipeStepsBody}>
        { recipe?.steps.map((step, index) => (
          <div key={index}>
            <h4 className="textHeader3">{ step.stepName }</h4>
            <p className="textBody">{ step.stepDescription }</p>
          </div>
        ))}
      </div>
    </Section>
  )
}