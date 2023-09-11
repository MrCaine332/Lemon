import React from 'react';
import styles from './HeroSlide.module.scss'
import {HeroSlideText} from "@modules/modules-home/hero-slider/components/hero-slide-text";
import {HeroSlideImage} from "@modules/modules-home/hero-slider/components/hero-slide-image";
import {Recipe} from "@app/types/response/models";

type HeroSlideProps = {
	recipe: Recipe
}

export const HeroSlide = ({ recipe }: HeroSlideProps) => {
	return (
		<div className={styles.heroSlide}>
			<HeroSlideText sliderItem={recipe} />
			<HeroSlideImage sliderItem={recipe} />
		</div>
	);
};

