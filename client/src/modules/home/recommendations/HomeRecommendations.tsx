import React from "react"
import styles from "./HomeRecommendations.module.scss"
import { BlockTitle } from "@components/ui/block-title"
import { Section } from "@components/ui/section"
import { RecipeCard } from "@components/common/recipe-card"
import { useGetNewestQuery } from "@app/http/recipe-api"

export const HomeRecommendations = () => {
  const { data: newestRecipes } = useGetNewestQuery()

  return (
    <Section>
      <BlockTitle title={"Newest"} />
      <div className={styles.homeRecommendationItems}>
        {newestRecipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </Section>
  )
}
