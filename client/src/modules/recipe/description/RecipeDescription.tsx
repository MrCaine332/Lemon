import React from "react"
import styles from "./RecipeDescription.module.scss"
import { Section } from "@components/ui/section"
import { Recipe } from "@app/types/response/models"
import { API_URL } from "@app/http"
import { useAppSelector } from "@app/store/store"
import { Button } from "@components/ui/button"
import { useNavigate } from "react-router-dom"
import { TimeComViews } from "@components/ui/time-com-views"
import { Divider } from "@components/ui/divider"
import { Author } from "@components/ui/author"

type RecipeDescriptionProps = {
  recipe?: Recipe
}

export const RecipeDescription = ({ recipe }: RecipeDescriptionProps) => {
  const navigate = useNavigate()
  const onEditButtonClick = () => {
    if (!recipe) return
    navigate(`/recipe/${recipe?.id}/edit`)
  }

  const { user } = useAppSelector((state) => state.auth)
  if (!recipe) {
    return <div>Loading</div>
  }

  return (
    <Section noPadding className={styles.recipeDescription}>
      <div className={styles.recipeDescriptionImage}>
        <img
          src={`${API_URL}/images/${recipe.previewImageLink}`}
          alt={recipe.title}
        />
      </div>
      <div className={styles.recipeDescriptionDetails}>
        <div className={styles.detailsHeader}>
          <p className="textHeader1">{recipe.title}</p>
          <Divider />
          <Author author={recipe.author.username} />
        </div>
        <div className={["textBody", styles.detailsDescription].join(" ")}>
          {recipe.description}
        </div>
        <div className={styles.detailsUtil}>
          <TimeComViews
            time={recipe.cookingTime}
            coms={recipe.commentsNo}
            views={recipe.viewsNo}
          />
          {user?.id === recipe.author.id ? (
            <Button
              styleType="outlined"
              className={styles.detailsHeaderEditButton}
              onClick={onEditButtonClick}
            >
              Edit
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
