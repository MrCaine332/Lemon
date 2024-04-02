import React, { useState } from "react"
import styles from "./HomeFeatured.module.scss"
import { BlockTitle } from "@components/ui/block-title"
import { Button } from "@components/ui/button"
import { Section } from "@components/ui/section"
import { Difficulty } from "@app/enums"
import { useGetFeaturedRecipesQuery } from "@app/http/recipe-api"
import { DifficultyButtons } from "@components/home/featured-difficulty-buttons"
import { HomeFeaturedItem } from "@components/home/featured-item"
import { useNavigate } from "react-router-dom"

export const HomeFeatured = () => {
  const navigate = useNavigate()
  const [difficulty, setDifficulty] = useState(Difficulty.easy)

  const { data: featuredRecipes } = useGetFeaturedRecipesQuery()

  const onViewMore = () => {
    navigate(`/recipes?difficulty=${Difficulty[difficulty].toUpperCase()}`)
  }

  return (
    <Section className={styles.homeFeaturedWrapper}>
      <BlockTitle title={"Recipes"} />
      <div className={styles.homeFeatured}>
        <DifficultyButtons
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <div className={styles.homeFeaturedList}>
          {featuredRecipes?.[
            Difficulty[difficulty] as keyof typeof featuredRecipes
          ].map((recipe) => (
            <HomeFeaturedItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <div className={styles.homeFeaturedMoreBtn}>
          <Button styleType={"outlined"} onClick={onViewMore}>
            VIEW MORE
          </Button>
        </div>
      </div>
    </Section>
  )
}
