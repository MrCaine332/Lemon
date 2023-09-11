import styles from './RecipesList.module.scss'
import {Section} from "@components/ui/section";
import {BlockTitle} from "@components/ui/block-title";
import {RecipeItem} from "@components/recipe-item";
import {Recipe} from "@app/types/response/models";

type RecipesListProps = {
	recipes: Recipe[]
}

export const RecipesList = ({ recipes }: RecipesListProps) => {
	return (
		<Section>
			<BlockTitle title={'Recipes'} />
			<div className={styles.recipesList}>
				{ recipes.map((recipe) => (
					<RecipeItem recipe={recipe} key={recipe.id} />
				)) }
			</div>
		</Section>
	);
};