import React, {useEffect, useState} from 'react';
import "./HomeRecipes.scss"
import BlockTitle from "../../templates/block-title/BlockTitle";
import HomeRecipeItem from "../home-recipe-item/HomeRecipeItem";
import AppButton from "../../templates/app-button/AppButton";
import {useAppSelector} from "../../hooks";

const HomeRecipes: React.FC = () => {

    const featuredRecipes = useAppSelector(state => state.home.featuredRecipes)

    const [difficulty, setDifficulty] = useState("easyRecipes")

    const onDifficultyChange = (difficulty: string) => {
        setDifficulty(difficulty)
    }

    return (
        <div className="shadow-wide section padding_double-col home__recipes-wrap">
            <BlockTitle title={"Recipes"} />
            <div className="home__recipes-difficulties">
                <AppButton type="button"
                           onClick={() => onDifficultyChange("easyRecipes")}
                           className={`secondary ${difficulty === "easyRecipes" && "difficulty_active"}`}
                >
                    EASY
                </AppButton>
                <AppButton type="button"
                           onClick={() => onDifficultyChange("mediumRecipes")}
                           className={`secondary ${difficulty === "mediumRecipes" && "difficulty_active"}`}
                >
                    MEDIUM
                </AppButton>
                <AppButton type="button"
                           onClick={() => onDifficultyChange("hardRecipes")}
                           className={`secondary ${difficulty === "hardRecipes" && "difficulty_active"}`}
                >
                    HARD
                </AppButton>
            </div>
            <div className="home__recipes">

                { featuredRecipes[difficulty as keyof typeof featuredRecipes]?.map(recipe => (
                    <HomeRecipeItem
                        key={recipe._id}
                        recipe={recipe}
                        direction="horizontal"
                        description={true}
                    />
                ))}

            </div>
            <div className="home__recipes-button">
                <AppButton type="button" to={"/"} className="primary">
                    VIEW MORE
                </AppButton>
            </div>
        </div>
    );
};

export default HomeRecipes;