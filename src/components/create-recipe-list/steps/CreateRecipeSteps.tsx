import React, {useEffect} from 'react';
import BlockTitle from "../../../templates/block-title/BlockTitle";
import "../CreateRecipeList.scss"
import AppButton from "../../../templates/app-button/AppButton";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {newRecipeActions} from "../../../app/slices/new-recipe-slice";

interface ICreateRecipeList {
    title: string
}


const CreateRecipeSteps: React.FC<ICreateRecipeList> = (props) => {

    const steps = useAppSelector(state => state.newRecipe.steps)
    const dispatch = useAppDispatch()

    const onStepAdd = () => {
        dispatch(newRecipeActions.addStep())
    }

    const onStepRemove = (index: number) => {
        dispatch(newRecipeActions.removeStep({ index }))
    }

    const onStepChange = (event: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        dispatch(newRecipeActions.setStep({index, value: event.target.value }))
    }

    const autosize = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.scrollHeight < 60) {
            event.target.style.height = "60px"
            return
        }
        event.target.style.height = "auto"
        event.target.style.height = event.target.scrollHeight + "px"
    }

    return (
        <div className="create-list__wrap">
            <BlockTitle title={props.title} />
            <div className="create-list__list">
                { steps.map((step, index) => (
                    <div key={index} className="create__input-group">
                        {/*<input onChange={event => onStepChange(event, index)} value={step.stepDescription} placeholder="e.g. Cherry tomatoes" />*/}
                        <textarea onChange={event => {onStepChange(event, index); autosize(event)}}
                                  value={step.stepDescription}
                                  placeholder="e.g. Whisk soy sauce, ketchup, honey, garlic, and basil together in a bowl; pour over the chicken." />
                        <AppButton onClick={() => onStepRemove(index)} type="button" name="X" className="primary" />
                    </div>
                ))}
                <AppButton onClick={onStepAdd} type="button" name={"ADD " + props.title.toUpperCase()} className="primary" />
            </div>
        </div>
    );
};

export default CreateRecipeSteps;