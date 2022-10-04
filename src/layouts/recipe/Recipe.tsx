import React, {useEffect} from 'react';
import "./Recipe.scss"
import recipe1 from "../../resources/images/Recipe1.png"
import recipe2 from "../../resources/images/Recipe2.png"
import recipe3 from "../../resources/images/Recipe3.png"
import RecipeSlider from "../../components/recipe-slider/RecipeSlider";
import RecipeInfo from "../../components/recipe-info/RecipeInfo";
import BlockTitle from "../../templates/block-title/BlockTitle";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getRecipeById} from "../../app/services/recipes-services";

const images: string[] = [recipe1, recipe2, recipe3]

const Recipe: React.FC = () => {

    const id = useParams().id
    const recipe = useAppSelector(state => state.recipes).pageRecipe
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id) {
            const recipeId = Number(id)
            dispatch(getRecipeById(recipeId))
        }
    }, [dispatch, id])

    return (
        <div className="page">
            <div className="recipe">
                <div className="shadow-wide section recipe__main">
                    <RecipeSlider images={images} />
                    { recipe && <RecipeInfo recipe={recipe} /> }
                </div>
                <div className="shadow-wide section padding_single-col recipe__utility">
                    <div className="recipe__tags">
                        <BlockTitle title={"Tags"} />
                        <p>
                            #YUMMY #SWEET #DINNER #LUNCH #BREAKFAST #FRESH #TASTY #DELISH #DELICIOUS #EATING #FOOD
                        </p>
                     </div>
                    <div className="recipe__target">
                        <BlockTitle title={"Target"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;