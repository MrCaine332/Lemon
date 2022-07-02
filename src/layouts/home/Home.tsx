import React, {useEffect} from 'react';
import "./Home.scss"
import HomeRecommendations from "../../components/home-recommendations/HomeRecommendations";
import HomeRecipes from "../../components/home-recipes/HomeRecipes";
import Author from "../../components/author/Author";
import Slider from "../../components/slider/Slider";
import SliderHeroText from "../../components/slider-items/slider-hero-items/slider-hero-text/SliderHeroText";
import SliderHeroImage from "../../components/slider-items/slider-hero-items/slider-hero-image/SliderHeroImage";
import {IRecipe} from "../../types";
import {useAppSelector} from "../../hooks";

let SliderItems: IRecipe[] = []
let items: any = []
const setItems = () => {
    items = [
        [<SliderHeroText sliderItem={SliderItems[0]} />, <SliderHeroImage sliderItem={SliderItems[0]} />],
        [<SliderHeroText sliderItem={SliderItems[1]} />, <SliderHeroImage sliderItem={SliderItems[1]} />],
        [<SliderHeroText sliderItem={SliderItems[2]} />, <SliderHeroImage sliderItem={SliderItems[2]} />],
        [<SliderHeroText sliderItem={SliderItems[3]} />, <SliderHeroImage sliderItem={SliderItems[3]} />],
        [<SliderHeroText sliderItem={SliderItems[4]} />, <SliderHeroImage sliderItem={SliderItems[4]} />]
    ]
}

const Home: React.FC = () => {

    const homeState = useAppSelector(state => state.home)

    useEffect(() => {
        SliderItems = homeState.sliderRecipes
        setItems()
    }, [homeState])

    return (
        <div className="page">
            <Slider items={items} ratio={[55, 45]} height={"500px"} />
            <HomeRecommendations />
            <div className="two-col">
                <HomeRecipes />
                <Author />
            </div>
        </div>
    );
};

export default Home;