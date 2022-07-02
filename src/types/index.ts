import React from "react";

export interface IForms {
    LOGIN: {
        type: string
        placeholder: string
        credentialType: string
    }[]
    REGISTRATION: {
        type: string
        placeholder: string
        credentialType: string
    }[]
}

export interface IFormCredentials {
    login: string
    email: string
    username: string
    password: string
    confirmedPassword: string
}



export interface INavbar {
    dropdowns: boolean
    search: boolean
    isVertical: boolean
    linkOnClick?: () => void
}

export interface INavbarList {
    dropdowns: boolean
    linkOnClick?: () => void
}

export interface INavbarDropdown {
    items: INavbarItem[]
}

export interface INavbarItem {
    linkTitle: string
    linkAddress: string
    submenuItems?: INavbarItem[]
}



export interface IRecipe {
    _id: number
    title: string
    description: string
    cookingTime: number
    commentsNo: number
    viewsNo: number
    author: string
    createdAt: string
    difficulty: string
    image?: any
}

export interface ISlider {
    items: any
    ratio: number[]
    height?: string
    width?: string
    dotsRef? : React.RefObject<HTMLDivElement>
}



/*//////////////////////////////////////////////////////////
//////////////////////////[ STATE ]/////////////////////////
 *//////////////////////////////////////////////////////////

export interface IAuthState {
    isAuthenticated: boolean
    user: any
    isFetching: boolean
    formType: {
        type: string
        text: string
    }
    formCredentials: IFormCredentials
}

export interface IHomeState {
    sliderRecipes: IRecipe[]
    newestRecipes: IRecipe[]
    featuredRecipes: {
        easyRecipes: IRecipe[]
        mediumRecipes: IRecipe[]
        hardRecipes: IRecipe[]
    }
}

export interface IRecipesState {
    recipes: IRecipe[]
    recipeToDisplay: IRecipe | null
}