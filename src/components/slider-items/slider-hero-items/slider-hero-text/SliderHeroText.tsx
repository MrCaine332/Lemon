import React from 'react';
import LemonLogoBig from "../../../../resources/logo/LemonLogoBig.png";
import "./SliderHeroText.scss"
import AppButton from "../../../../templates/app-button/AppButton";
import {IRecipe} from "../../../../types/models";

const SliderHeroText: React.FC<{sliderItem: IRecipe}> = ({sliderItem}) => {

    return (
        <div className="padding_single-col slider__hero-text_wrap">
            <div className="slider__hero-logo">
                <img src={LemonLogoBig} alt={""} />
            </div>
            <div className="slider__hero-text">
                <h2>{sliderItem?.title}</h2>
                <p>{sliderItem?.description}</p>
                <AppButton type="link"
                           to={`/recipe/${sliderItem?._id}`}
                           className="primary" >
                    GET RECIPE
                </AppButton>
            </div>
        </div>
    );
};

export default SliderHeroText;