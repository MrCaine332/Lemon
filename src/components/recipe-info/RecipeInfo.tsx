import React from 'react';
import "./RecipeInfo.scss"
import clocksIcon from "../../resources/icons/ClockIcon.png"
import easyIcon from "../../resources/icons/EasyIcon.png"
import {IRecipe} from "../../types";

const RecipeInfo: React.FC<{ recipe: IRecipe }> = ({ recipe }) => {
    return (
        <div className="recipe__info padding_double-col">
            <div className="recipe__info-header">
                <h1>{ recipe.title }</h1>
                <div>
                    by <b>{ recipe.author }</b>
                </div>
            </div>
            <div className="recipe__info-utility">
                <div>
                    <img className="clocks" src={clocksIcon} /><span>{ recipe.cookingTime }</span>
                </div>
                <div>
                    <img className="easy" src={easyIcon} /><span>{ recipe.difficulty }</span>
                </div>
                <button className="recipe__info-savebtn primary">SAVE RECIPE</button>
            </div>
            <div className="recipe__info-description">
                { recipe.description }
            </div>
        </div>
    );
};

export default RecipeInfo;