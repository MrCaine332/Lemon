import {AppDispatch} from "../store";
import {homeActions} from "../slices/home-slice";
import recipesData from "../../data/recipes.json"
import {IRecipe} from "../../types";

export const getTodaySelection = () => {
    return (dispatch: AppDispatch) => {
        const recipesDataCopy = [...recipesData]
        const todaySelectionData: IRecipe[] = []

        for (let i = 0; i < 5; i++) {
            const index = Math.floor(Math.random() * recipesDataCopy.length)
            todaySelectionData.push(recipesDataCopy[index])
            recipesDataCopy.splice(index, 1)
        }

        dispatch(homeActions.setSliderRecipes(todaySelectionData))
    }
}

export const getNewest = () => {
    return (dispatch: AppDispatch) => {
        const recipesDataCopy = [...recipesData]
        const newestRecipes = []

        for (let i = 0; i < 3; i++) {
            const max = recipesDataCopy.reduce(function (a, b) { return a.createdAt > b.createdAt ? a : b; });
            recipesDataCopy.splice(recipesDataCopy.indexOf(max), 1)
            newestRecipes.push(max)
        }

        dispatch(homeActions.setNewest(newestRecipes))
    }
}

export const getFeaturedRecipes = () => {
    return (dispatch: AppDispatch) => {
        const recipesDataCopy = [...recipesData]
        const featuredRecipes: {easyRecipes: IRecipe[], mediumRecipes: IRecipe[], hardRecipes: IRecipe[]} = {
            easyRecipes: [],
            mediumRecipes: [],
            hardRecipes: []
        }

        for (let key in featuredRecipes) {
            for (let i = 0; i < 3; i++) {
                const index = recipesDataCopy.findIndex(recipe => {
                    if (key === "easyRecipes")
                        return recipe.difficulty === "EASY"
                    if (key === "mediumRecipes")
                        return recipe.difficulty === "MEDIUM"
                    if (key === "hardRecipes")
                        return recipe.difficulty === "HARD"
                    return false
                })
                featuredRecipes[key as keyof typeof featuredRecipes].push(recipesDataCopy[index])
                recipesDataCopy.splice(index, 1)
            }
        }

        dispatch(homeActions.setFeaturedRecipes(featuredRecipes))

    }
}