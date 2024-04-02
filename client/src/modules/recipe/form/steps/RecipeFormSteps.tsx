import styles from "./RecipeFormSteps.module.scss"
import React, { ChangeEvent, useEffect, useState } from "react"
import { Step } from "@app/types/request/models"
import { Section } from "@components/ui/section"
import { BlockTitle } from "@components/ui/block-title"
import { Divider } from "@components/ui/divider"
import { Input } from "@components/ui/input"
import { Button } from "@components/ui/button"
import Icons from "@components/ui/icons"
import { CreateRecipeBody } from "@app/types/request/bodies"
import { CreateRecipeApiError } from "@app/types/errors"

const placeholders: Step[] = [
  { stepName: "Oven", stepDescription: "Preheat oven to 350 degrees F..." },
  {
    stepName: "Preparation",
    stepDescription: "Combine all dry ingredients in a large bowl...",
  },
  {
    stepName: "Baking",
    stepDescription: "Pour into greased trays and bake for 15-20 minutes...",
  },
]

const defaultSteps = [
  { stepName: "Step 1", stepDescription: "" },
  { stepName: "Step 2", stepDescription: "" },
]

type RecipeFormStepsProps = {
  recipeData: CreateRecipeBody
  setRecipeData: React.Dispatch<React.SetStateAction<CreateRecipeBody>>
  errors: CreateRecipeApiError
  setErrors: React.Dispatch<React.SetStateAction<CreateRecipeApiError>>
}

export const RecipeFormSteps = ({
  recipeData,
  setRecipeData,
  errors,
  setErrors,
}: RecipeFormStepsProps) => {
  useEffect(() => {
    if (recipeData.steps.length === 0) {
      setRecipeData((prev) => ({ ...prev, steps: defaultSteps }))
    }
  }, [recipeData.steps.length])

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Step,
    index: number
  ) => {
    const newSteps = [...recipeData.steps.map((step) => ({ ...step }))]
    newSteps[index][field] = e.target.value
    setRecipeData((prev) => ({ ...prev, steps: newSteps }))
    if (errors.steps) setErrors((prev) => ({ ...prev, steps: "" }))
  }

  const onStepRemove = (index: number) => {
    const newSteps = [...recipeData.steps.map((step) => ({ ...step }))]
    newSteps.splice(index, 1)
    setRecipeData((prev) => ({ ...prev, steps: newSteps }))
  }

  const onAddStep = () => {
    const newSteps = [...recipeData.steps.map((step) => ({ ...step }))]
    newSteps.push({
      stepName: "Step " + (recipeData.steps.length + 1),
      stepDescription: "",
    })
    setRecipeData((prev) => ({ ...prev, steps: newSteps }))
    if (errors.steps) setErrors((prev) => ({ ...prev, steps: "" }))
  }

  return (
    <Section className={styles.recipeFormSteps} noPadding>
      <BlockTitle title={"Steps"} className={styles.recipeFormStepsTitle} />

      <div className={styles.recipeFormStepsBody}>
        <p className={["textBody", styles.recipeFormStepsGuide].join(" ")}>
          Explain how to make your recipe, including oven temperatures, baking
          or cooking times, and pan sizes, etc.
        </p>

        <Divider />

        {errors.steps ? (
          <p className={"textBody " + styles.recipeFormStepsError}>
            {errors.steps}
          </p>
        ) : null}

        <div className={styles.recipeFormStepsList}>
          {recipeData.steps.map((step, index) => (
            <div className={styles.stepInputsGroup} key={index}>
              <div className={styles.stepInputsHeader}>
                <Input
                  placeholder={
                    index < 3 ? placeholders[index].stepName : "Step name"
                  }
                  value={step.stepName}
                  wrapperClassName={styles.stepNameInputWrapper}
                  onChange={(e) => onInputChange(e, "stepName", index)}
                />
                <Button
                  styleType={"outlined"}
                  onClick={() => onStepRemove(index)}
                  className={styles.removeStepButton}
                >
                  <Icons name={"close"} size={24} />
                </Button>
              </div>
              <Input
                as={"textarea"}
                className={styles.stepTextarea}
                value={step.stepDescription}
                placeholder={
                  index < 3
                    ? placeholders[index].stepDescription
                    : "Step description"
                }
                onChange={(e) => onInputChange(e, "stepDescription", index)}
              />
            </div>
          ))}
        </div>

        <div className={styles.addStepButton}>
          <Button styleType={"outlined"} onClick={onAddStep}>
            ADD NEW STEP
          </Button>
        </div>
      </div>
    </Section>
  )
}
