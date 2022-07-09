import React from 'react';
import BlockTitle from "../general/block-title/BlockTitle";
import "./CreateRecipeList.scss"
import AppButton from "../general/app-button/AppButton";

interface ICreateRecipeList {
    title: string
}

const CreateRecipeList: React.FC<ICreateRecipeList> = (props) => {
    return (
        <div className="create-list__wrap">
            <BlockTitle title={props.title} />
            <div className="create-list__list">
                <div className="create__input-group">
                    <input />
                    <input />
                </div>
                <AppButton type="button" name={"ADD " + props.title.toUpperCase()} className="primary" />
            </div>
        </div>
    );
};

export default CreateRecipeList;