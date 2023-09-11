import React from 'react';
import styles from "./HeroSlideImage.module.scss"
import {Recipe} from "@app/types/response/models";
import {API_URL} from "@app/http";

type HeroSlideImageProps = {
    sliderItem: Recipe
}

export const HeroSlideImage = ({sliderItem}: HeroSlideImageProps) => {
    return (
        <div className={styles.heroSlideImage}>
            <img src={`${API_URL}/images/${sliderItem.previewImageLink}`} alt={""} />
            <div className={styles.heroSlideImage_gradient}></div>
        </div>
    );
};