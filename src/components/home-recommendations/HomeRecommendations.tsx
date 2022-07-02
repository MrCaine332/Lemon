import React, {useEffect} from 'react';
import "./HomeRecommendations.scss"
import BlockTitle from "../general/block-title/BlockTitle";

import HomeRecipeItem from "../home-recipe-item/HomeRecipeItem";
import {useAppSelector} from "../../hooks";


const HomeRecommendations: React.FC = () => {

    const homeState = useAppSelector(state => state.home)

    return (
        <div className="section shadow-wide padding_single-col">
            <BlockTitle title={"Newest"} />
            <div className="rec__items">
                {
                    homeState.newestRecipes.map(recipe => (
                        <HomeRecipeItem
                            key={recipe._id}
                            recipe={recipe}
                            direction="vertical"
                            description={false}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default HomeRecommendations;