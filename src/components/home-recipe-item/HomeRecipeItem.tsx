import React, {useEffect, useState} from 'react';
import ClockViewsComs from "../../templates/clock-views-coms/ClockViewsComs";
import "./HomeRecipeItem.scss"
import {Link} from "react-router-dom";
import {IRecipe} from "../../types/models";

interface IHomeRecipeItem {
    recipe: IRecipe
    direction?: string
    description?: boolean
}

const HomeRecipeItem: React.FC<IHomeRecipeItem> = ({
    recipe,
    description,
    direction
}) => {

    const [image, setImage] = useState("")

    useEffect(() => {
        if (recipe.image) {
            import(`/src/resources/images/${recipe.image}`)
                .then(resolve => setImage(resolve.default))
        }
    }, [recipe.image])


    return (
        <Link to={`/recipe/${recipe._id}`} className={`rec__item ${direction === "horizontal" && "rec__item_hor"}`}>
            <img className="rec__item-img" src={image} alt="" />
            <div className="rec__item-info">
                <p className={`rec__item-title ${description && "single-row"}`}>{recipe.title}</p>
                { description &&
                    <p className="rec__item-desc">{recipe.description}</p> }
                <div className="rec__item-util">
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

export default HomeRecipeItem;