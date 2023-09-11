import styles from './CreateRecipeSteps.module.scss'
import React, {ChangeEvent, useEffect, useState} from "react";
import {Step} from "@app/types/request/models";
import {Section} from "@components/ui/section";
import {BlockTitle} from "@components/ui/block-title";
import {Divider} from "@components/ui/divider";
import {Input} from "@components/ui/input";
import {Button} from "@components/ui/button";
import Icons from "@components/ui/icons";
import {CreateRecipeFormProps} from "@pages/create-recipe/Page";

const placeholders: Step[] = [
	{stepName: "Oven", stepDescription: "Preheat oven to 350 degrees F..."},
	{stepName: "Preparation", stepDescription: "Combine all dry ingredients in a large bowl..."},
	{stepName: "Baking", stepDescription: "Pour into greased trays and bake for 15-20 minutes..."},
]

export const CreateRecipeSteps = ({ recipeData, setRecipeData, errors, setErrors }: CreateRecipeFormProps) => {
	const [steps, setSteps] = useState<Step[]>(() => {
		if (recipeData.steps.length > 0)
			return [
				...recipeData.steps,
			]

		return [
			{ stepName: "Step 1", stepDescription: "" },
			{ stepName: "Step 2", stepDescription: "" },
		]
	})

	const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Step, index: number) => {
		const newSteps = [...steps]
		newSteps[index][field] = e.target.value
		setSteps(newSteps)
		if (errors.steps)
			setErrors(prev => ({...prev, steps: ""}))
	}

	const onStepRemove = (index: number) => {
		const newSteps = [...steps]
		newSteps.splice(index, 1)
		setSteps(newSteps)
	}

	const onAddStep = () => {
		const newSteps = [...steps]
		newSteps.push({stepName: "Step " + (steps.length + 1), stepDescription: ""})
		setSteps(newSteps)
		if (errors.steps)
			setErrors(prev => ({...prev, steps: ""}))
	}

	useEffect(() => {
		const filteredSteps = steps.filter((step) =>
			step.stepName && step.stepDescription)
		setRecipeData(prev => ({...prev, steps: filteredSteps}))
	}, [steps])

	return (
		<Section className={styles.createRecipeSteps} noPadding>
			<BlockTitle title={"Steps"} className={styles.createRecipeStepsTitle} />
			<div className={styles.createRecipeStepsBody}>
				<p className={["textBody", styles.createRecipeStepsGuide].join(' ')}>
					Explain how to make your recipe,
					including oven temperatures, baking
					or cooking times, and pan sizes, etc.
				</p>
				<Divider/>
				{ errors.ingredients
					? <p className={"textBody " + styles.createRecipeStepsError}>
						{ errors.steps }
					</p>
					: null }
				<div className={styles.createRecipeStepsList}>
					{ steps.map((step, index) => (
						<div className={styles.stepInputsGroup} key={index}>
							<div className={styles.stepInputsHeader}>
								<Input placeholder={index < 3 ? placeholders[index].stepName : "Step name"}
								       value={step.stepName}
								       wrapperClassName={styles.stepNameInputWrapper}
								       onChange={(e) => onInputChange(e, "stepName", index)}
								/>
								<Button styleType={"outlined"}
								        onClick={() => onStepRemove(index)}
								        className={styles.removeStepButton}>
									<Icons name={"close"} size={24} />
								</Button>
							</div>
							<Input as={"textarea"}
							       className={styles.stepTextarea}
							       value={step.stepDescription}
							       placeholder={index < 3 ? placeholders[index].stepDescription : "Step description"}
							       onChange={(e) => onInputChange(e, "stepDescription", index)}
							/>
						</div>
					))}
				</div>
				<div className={styles.addStepButton} >
					<Button styleType={"outlined"}
					        onClick={onAddStep}>
						ADD NEW STEP
					</Button>
				</div>
			</div>
		</Section>
	);
};