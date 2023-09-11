import styles from './CreateRecipeIngredients.module.scss'
import React, {ChangeEvent, useEffect, useState} from "react";
import {Section} from "@components/ui/section";
import {Input} from "@components/ui/input";
import {BlockTitle} from "@components/ui/block-title";
import {Button} from "@components/ui/button";
import {Divider} from "@components/ui/divider";
import {Ingredient} from "@app/types/request/models";
import Icons from "@components/ui/icons";
import {CreateRecipeFormProps} from "@pages/create-recipe/Page";

const placeholders: Ingredient[] = [
	{ingredientName: "e.g. Flour, sifted", ingredientAmount: "e.g. 2 cups"},
	{ingredientName: "e.g. Sugar", ingredientAmount: "e.g. 1 cup"},
	{ingredientName: "e.g. Butter, softened", ingredientAmount: "e.g. 2 tablespoons"},
]

export const CreateRecipeIngredients = ({ recipeData, setRecipeData, errors, setErrors }: CreateRecipeFormProps) => {
	const [ingredients, setIngredients] = useState<Ingredient[]>(() => {
		if (recipeData.ingredients.length > 0)
			return [
				...recipeData.ingredients,
			]

		return [
			{ ingredientName: "", ingredientAmount: "" },
			{ ingredientName: "", ingredientAmount: "" },
			{ ingredientName: "", ingredientAmount: "" },
		]
	})

	const onInputChange = (e: ChangeEvent<HTMLInputElement>, field: keyof Ingredient, index: number) => {
		const newIngredients = [...ingredients]
		newIngredients[index][field] = e.target.value
		setIngredients(newIngredients)
		if (errors.ingredients)
			setErrors(prev => ({...prev, ingredients: ""}))
	}

	const onIngredientRemove = (index: number) => {
		const newIngredients = [...ingredients]
		newIngredients.splice(index, 1)
		setIngredients(newIngredients)
	}

	const onAddIngredient = () => {
		const newIngredients = [...ingredients]
		newIngredients.push({ingredientName: "", ingredientAmount: ""})
		setIngredients(newIngredients)
		if (errors.ingredients)
			setErrors(prev => ({...prev, ingredients: ""}))
	}

	useEffect(() => {
		const filteredIngredients = ingredients.filter((ingredient) =>
			ingredient.ingredientName && ingredient.ingredientAmount)
		setRecipeData(prev => ({...prev, ingredients: filteredIngredients}))
	}, [ingredients])

	return (
		<Section className={styles.createRecipeIngredients} noPadding>
			<BlockTitle title={"Ingredients"} className={styles.createRecipeIngredientsTitle} />
			<div className={styles.createRecipeIngredientsBody}>
				<p className={["textBody", styles.createRecipeIngredientsGuide].join(' ')}>
					Enter one ingredient per line. Write ingredient name
					(i.e. tomato, soy sauce, cabbage)
					and any special preparation
					(i.e. sifted, softened, chopped)
					in the first field.
					Write the quantity
					(i.e. 300 gram, 2 tablespoons, 1 cup)
					in the second field.
				</p>
				<Divider/>
				{ errors.ingredients
					? <p className={"textBody " + styles.createRecipeIngredientsError}>
						{ errors.ingredients }
					</p>
					: null }
				<div className={styles.createRecipeIngredientsList}>
					{ ingredients.map((ingredient, index) => (
						<div className={styles.ingredientInputsGroup} key={index}>
							<Input wrapperClassName={styles.ingredientNameWrapper}
							       onChange={(e) => onInputChange(e, "ingredientName", index)}
							       value={ingredient.ingredientName}
							       placeholder={index < 3 ? placeholders[index].ingredientName : "Ingredient"} />

							<div className={styles.ingredientUtils}>
								<Input wrapperClassName={styles.ingredientAmountWrapper}
								       onChange={(e) => onInputChange(e, "ingredientAmount", index)}
								       value={ingredient.ingredientAmount}
								       placeholder={index < 3 ? placeholders[index].ingredientAmount : "Amount"} />
								<Button styleType={"outlined"}
								        onClick={() => onIngredientRemove(index)}
								        className={styles.removeIngredientButton}>
									<Icons name={"close"} size={24} />
								</Button>
							</div>
						</div>
					))}
				</div>
				<div className={styles.addIngredientButton} >
					<Button styleType={"outlined"}
					        onClick={onAddIngredient}>
						ADD INGREDIENT
					</Button>
				</div>
			</div>
		</Section>
	);
};