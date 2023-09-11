import React from 'react';
import {Link} from "react-router-dom";
import {TimeComViews} from "@components/ui/time-com-views";
import styles from "./RecipeItem.module.scss"
import {Author} from "@components/ui/author";
import {Divider} from "@components/ui/divider";
import {Recipe} from "@app/types/response/models";
import {API_URL} from "@app/http";

type RecipeItemProps = {
    recipe: Recipe
}

export const RecipeItem = ({recipe}: RecipeItemProps) => {
    return (
        <Link to={`/recipe/${recipe.id}`}
              className={styles.recipeItem}
        >
            <img className={styles.recipeItemImage} src={`${API_URL}/images/${recipe.previewImageLink}`} alt="" />
            <div className={styles.recipeItemInfo}>
                <h3 className={'textHeader3 ' + styles.recipeItemTitle}>{recipe.title}</h3>
                <p className={'textBody ' + styles.recipeItemDescription}>{recipe.description}</p>
                <Divider />
                <div className="rec__item-util">
                    <Author author={recipe.author.username} />
                    <TimeComViews
                        time={recipe.cookingTime}
                        coms={recipe.commentsNo}
                        views={recipe.viewsNo} />
                </div>
            </div>
        </Link>
    );
};