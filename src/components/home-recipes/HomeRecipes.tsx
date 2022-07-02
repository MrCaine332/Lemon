import React, {useEffect, useState} from 'react';
import "./HomeRecipes.scss"
import BlockTitle from "../general/block-title/BlockTitle";
import recipeImage1 from "../../resources/images/Recipe1.png"
import recipeImage2 from "../../resources/images/Recipe2.png"
import recipeImage3 from "../../resources/images/Recipe3.png"
import HomeRecipeItem from "../home-recipe-item/HomeRecipeItem";
import AppButton from "../general/app-button/AppButton";
import {useAppSelector} from "../../hooks";

const HomeRecipes: React.FC = () => {

    const homeState = useAppSelector(state => state.home)

    const [difficulty, setDifficulty] = useState("easyRecipes")

    const onDifficultyChange = (difficulty: string) => {
        setDifficulty(difficulty)
    }

    return (
        <div className="shadow-wide section padding_double-col home__recipes-wrap">
            <BlockTitle title={"Recipes"} />
            <div className="home__recipes-difficulties">
                <AppButton type="button" name="EASY"
                           onClick={() => onDifficultyChange("easyRecipes")}
                           className={`secondary ${difficulty === "easyRecipes" && "difficulty_active"}`} />
                <AppButton type="button" name="MEDIUM"
                           onClick={() => onDifficultyChange("mediumRecipes")}
                           className={`secondary ${difficulty === "mediumRecipes" && "difficulty_active"}`} />
                <AppButton type="button" name="HARD"
                           onClick={() => onDifficultyChange("hardRecipes")}
                           className={`secondary ${difficulty === "hardRecipes" && "difficulty_active"}`} />
            </div>
            <div className="home__recipes">

                { homeState.featuredRecipes[difficulty as keyof typeof homeState.featuredRecipes]?.map(recipe => (
                    <HomeRecipeItem
                        key={recipe._id}
                        recipe={recipe}
                        direction="horizontal"
                        description={true}
                    />
                ))}



            </div>
            <div className="home__recipes-button">
                <AppButton type="button" to={"/"} name="VIEW MORE" className="primary" />
            </div>
        </div>
    );
};

export default HomeRecipes;