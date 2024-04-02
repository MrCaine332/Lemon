import React from "react"
import "./RecipeInfo.scss"
// import clocksIcon from "../../resources/icons/ClockIcon.png"
// import easyIcon from "../../resources/icons/EasyIcon.png"
import { Recipe } from "@app/types/response/models"
import Icons from "@components/ui/icons"

type RecipeInfo = {
  recipe: Recipe
}

const RecipeInfo = ({ recipe }: RecipeInfo) => {
  return (
    <div className="recipe__info padding_double-col">
      <div className="recipe__info-header">
        <h1>{recipe.title}</h1>
        <div>
          by <b>{recipe.author.username}</b>
        </div>
      </div>
      <div className="recipe__info-utility">
        <div>
          {/*<img className="clocks" src={clocksIcon} />*/}
          <Icons name="clock" size={20} />
          <span>{recipe.cookingTime}</span>
        </div>
        <div>
          {/*<img className="easy" src={easyIcon} />*/}
          <span>{recipe.difficulty}</span>
        </div>
        <button className="recipe__info-savebtn primary">SAVE RECIPE</button>
      </div>
      <div className="recipe__info-description">{recipe.description}</div>
    </div>
  )
}

export default RecipeInfo
