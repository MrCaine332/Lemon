import React, {useEffect} from 'react';
import "./Recipes.scss"
import RecipesFilter from "../../components/recipes-filter/RecipesFilter";
import RecipesList from "../../components/recipes-list/RecipesList";

const Recipes: React.FC = () => {

    return (
        <div className="page">
            <div className="section shadow-wide padding_single-col recipes">
                <RecipesFilter />
                <RecipesList />
            </div>
        </div>
    );
};

export default Recipes;