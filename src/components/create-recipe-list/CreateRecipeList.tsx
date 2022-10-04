import React, {useEffect} from 'react';
import BlockTitle from "../../templates/block-title/BlockTitle";
import "./CreateRecipeList.scss"
import AppButton from "../../templates/app-button/AppButton";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {newRecipeActions} from "../../app/slices/new-recipe-slice";

interface ICreateRecipeList {
    title: string
}


const CreateRecipeList: React.FC<ICreateRecipeList> = (props) => {

    const ingredients = useAppSelector(state => state.newRecipe.ingredients)
    const dispatch = useAppDispatch()

    const onIngredientAdd = () => {
        dispatch(newRecipeActions.addIngredient())
    }

    const onIngredientRemove = (index: number) => {
        dispatch(newRecipeActions.removeIngredient({ index }))
    }

    const onIngredientChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        dispatch(newRecipeActions.setIngredient({index, field: event.target.name, value: event.target.value }))
    }

    return (
        <div className="create-list__wrap">
            <BlockTitle title={props.title} />
            <div className="create-list__list">
                { ingredients.map((ingredient, index) => (
                    <div key={index} className="create__input-group">
                        <input onChange={event => onIngredientChange(event, index)} value={ingredient.ingredientName} name="ingredientName" placeholder="e.g. Cherry tomatoes" />
                        <input onChange={event => onIngredientChange(event, index)} value={ingredient.quantity} name="quantity" placeholder="e.g. 7 pieces" />
                        <AppButton onClick={() => onIngredientRemove(index)} type="button" name="X" className="primary" />
                    </div>
                ))}
                <AppButton onClick={onIngredientAdd} type="button" name={"ADD " + props.title.toUpperCase()} className="primary" />
            </div>
        </div>
    );
};

export default CreateRecipeList;