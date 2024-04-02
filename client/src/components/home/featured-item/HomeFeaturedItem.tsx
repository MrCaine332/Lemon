import styles from "./HomeFeaturedItem.module.scss"
import { Author } from "@components/ui/author"
import { Link } from "react-router-dom"
import { Recipe } from "@app/types/response/models"
import { API_URL } from "@app/http"

type HomeRecipesItemProps = {
  recipe: Recipe
}

export const HomeFeaturedItem = ({ recipe }: HomeRecipesItemProps) => {
  return (
    <Link
      to={"/recipe/:" + recipe.id}
      className={styles.homeFeaturedItemWrapper}
    >
      <div className={styles.homeFeaturedItem}>
        <div className={styles.homeFeaturedItemImage}>
          <img src={`${API_URL}/images/${recipe.previewImageLink}`} alt="" />
        </div>
        <div className={styles.homeFeatureItemInfo}>
          <h3 className={"textHeader3 " + styles.homeFeaturedItemTitle}>
            {" "}
            {recipe.title}{" "}
          </h3>
          <p className={"textBody " + styles.homeFeaturedItemDescription}>
            {recipe.description}
          </p>
          <Author author={recipe.author.username} />
        </div>
      </div>
    </Link>
  )
}
