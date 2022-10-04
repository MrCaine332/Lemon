import React, {useEffect} from 'react'
import BlockTitle from "../../templates/block-title/BlockTitle";
import "./RecipesList.scss"
import RecipesItem from "./recipes-item/RecipesItem";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getRecipes} from "../../app/services/recipes-services";

const RecipesList = () => {

    const recipesState = useAppSelector(state => state.recipes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

    return (
        <div className="recipes__list-wrap">
            <BlockTitle title={"Recipes"} />
            <div className="recipes__list">
                { recipesState.recipes.map(recipe => (
                    <RecipesItem key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipesList;