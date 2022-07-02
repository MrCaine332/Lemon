import React, {useEffect, useState} from 'react';
import "./RecipesItem.scss"
import {Link} from "react-router-dom";
import {IRecipe} from "../../../types";
import ClockViewsComs from "../../general/clock-views-coms/ClockViewsComs";

interface IRecipeItem {
    recipe: IRecipe
}

const RecipesItem: React.FC<IRecipeItem> = ({ recipe }) => {

    const [image, setImage] = useState("")

    useEffect(() => {
        if (recipe.image) {
            import(`/src/resources/images/${recipe.image}`)
                .then(resolve => setImage(resolve.default))
        }
    }, [])

    return (
        <Link to={`/recipe/${recipe._id}`} className="shadow-narrow recipes__list-item">
            <div className="recipes__item-img">
                <img src={image} alt="" />
            </div>
            <div className="recipes__item-header">
                <h1>{recipe.title}</h1>
                <hr className="separation-horizontal"/>
            </div>
            <div className="recipes__item-desc">
                {recipe.description}
            </div>
            <div className="recipes__item-info">
                <div className="recipes__item-blogger">
                    <p>by <b>{recipe.author}</b></p>
                    <ClockViewsComs
                        cookingTime={recipe.cookingTime}
                        commentsCount={recipe.commentsNo}
                        viewCount={recipe.viewsNo} />
                </div>
            </div>
        </Link>
    );
};

export default RecipesItem;