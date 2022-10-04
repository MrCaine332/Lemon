import React from 'react';
import "./Home.scss"
import HomeRecommendations from "../../components/home-recommendations/HomeRecommendations";
import HomeRecipes from "../../components/home-recipes/HomeRecipes";
import Author from "../../components/author/Author";
import HomeSliderContainer from "../../components/home-slider-container/HomeSliderContainer";

const Home: React.FC = () => {
    return (
        <div className="page">
            <HomeSliderContainer />
            <HomeRecommendations />
            <div className="two-col">
                <HomeRecipes />
                <Author />
            </div>
        </div>
    );
};

export default Home;