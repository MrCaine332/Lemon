import styles from "./RecipesList.module.scss"
import { Section } from "@components/ui/section"
import { BlockTitle } from "@components/ui/block-title"
import { RecipeCard } from "@components/common/recipe-card"
import { Recipe } from "@app/types/response/models"

type RecipesListProps = {
  recipes?: Recipe[]
  customBlockTitle?: string
}

export const RecipesList = ({ recipes, customBlockTitle }: RecipesListProps) => {
  return (
    <Section>
      <BlockTitle title={ customBlockTitle || "Recipes"} />
      <div className={styles.recipesList}>
        {recipes?.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </Section>
  )
}
