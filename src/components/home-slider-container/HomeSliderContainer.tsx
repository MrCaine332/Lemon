import React, {useEffect} from 'react';
import './HomeSliderContainer.scss'
import {useAppSelector} from "../../hooks";
import Slider from "../slider/Slider";
import SliderHeroText from "../slider-items/slider-hero-items/slider-hero-text/SliderHeroText";
import SliderHeroImage from "../slider-items/slider-hero-items/slider-hero-image/SliderHeroImage";


const HomeSliderContainer: React.FC = () => {

    const sliderRecipes = useAppSelector(state => state.home.sliderRecipes)

    return (
        <>
        {
            sliderRecipes.length &&
            <Slider height="500px" itemsToDisplay={1}>
                { sliderRecipes.map((item, index) => (
                    <>
                        <SliderHeroText sliderItem={item} />
                        <SliderHeroImage sliderItem={item} />
                    </>
                ))}
            </Slider>
        }
        </>
    );
};

export default HomeSliderContainer;