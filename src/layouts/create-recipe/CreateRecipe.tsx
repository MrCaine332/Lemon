import React, {useEffect, useState} from 'react';
import BlockTitle from "../../templates/block-title/BlockTitle";
import "./CreateRecipe.scss"
import CreateRecipeList from "../../components/create-recipe-list/CreateRecipeList";

import image from "../../resources/images/404.png"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {newRecipeActions} from "../../app/slices/new-recipe-slice";
import CreateRecipeSteps from "../../components/create-recipe-list/steps/CreateRecipeSteps";

const CreateRecipe = () => {

    const newRecipeData = useAppSelector(state => state.newRecipe)
    const dispatch = useAppDispatch()

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(newRecipeActions.setNewRecipeInfo({field: event.target.name, value: event.target.value}))
    }

    const onAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "mainImage" && event.target.files && event.target.files.length > 0)
            try {
                dispatch(newRecipeActions.setNewRecipeInfo({field: event.target.name, value: URL.createObjectURL(event.target.files[0])}))
            } catch(e) {
                console.log("Image is not selected")
            }
    }

    return (
        <div className="shadow-wide section padding_single-col new-recipe">
            <BlockTitle title="New Recipe" />
            <form className="new-recipe__form">
                <div className="new-recipe__head">
                    <div className="new-recipe__head-inputs">
                        <input name="title" type="text" placeholder="GIVE YOUR RECIPE A TITLE" onChange={onInputChange} value={newRecipeData.title} />
                        <textarea name="description"
                                  placeholder="SHARE THE STORY BEHIND YOUR RECIPE AND WHAT MAKES IT SPECIAL"
                                  onChange={onInputChange} value={newRecipeData.description} />
                    </div>
                    <div className="new-recipe__head-image">
                        <label htmlFor="upload-image">
                            <img src={newRecipeData.mainImage || image}  alt=""/>
                        </label>
                        <input onChange={onAddImage} accept="image/png, image/gif, image/jpeg" name="mainImage" id="upload-image" type="file" />
                    </div>
                </div>
                <div className="new-recipe__body">
                    <CreateRecipeList title="Ingredients" />
                    <CreateRecipeSteps title="Steps" />
                </div>
                <div className="new-recipe__body">
                    <BlockTitle title="Additional" />
                </div>
            </form>
        </div>
    );
};

export default CreateRecipe;