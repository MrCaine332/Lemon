import React, {useEffect, useState} from 'react';
import BlockTitle from "../general/block-title/BlockTitle";
import "./RecipesFilter.scss"
import Search from "../general/search/Search";

const RecipesFilter: React.FC = () => {

    return (
        <div className="recipe__filter-wrap">
            <BlockTitle title={"Filter"} />
            <div className="recipe__filter">
                <div className="filter__item">
                    <Search placeholder={"RECIPE TITLE OR USER"} />
                    <div className="filter__tags">
                        <div>
                            dsfsdf
                        </div>
                    </div>
                </div>
                <div className="filter__item">
                    <div className="filter__diff">
                        <p>Difficulty</p>
                        <select defaultValue={"any"}>
                            <option value="any">Any</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className="filter__time">
                        <p>Cooking time (min)</p>
                        <div>
                            <input type="number" placeholder="from" />
                            -
                            <input type="number" placeholder="to" />
                        </div>
                    </div>
                    <div className="filter__time">
                        <p>Date</p>
                        <div>
                            <input type={"date"} defaultValue={new Date(0).toISOString().split('T')[0]} />
                            -
                            <input type={"date"} defaultValue={new Date().toISOString().split('T')[0]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesFilter;