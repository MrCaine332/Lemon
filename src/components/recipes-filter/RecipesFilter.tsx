import React, {useEffect, useState} from 'react';
import BlockTitle from "../general/block-title/BlockTitle";
import "./RecipesFilter.scss"
import Search from "../general/search/Search";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {recipesActions} from "../../app/slices/recipes-slice";

const RecipesFilter: React.FC = () => {

    const filters = useAppSelector(state => state.recipes).filters
    const dispatch = useAppDispatch()

    const onFilterChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.type !== "date") {
            dispatch(recipesActions.setFilterField({ field: event.target.name, value: event.target.value }))
        } else {
            try {
                const date = new Date(event.target.value).toISOString()
                dispatch(recipesActions.setFilterField({ field: event.target.name, value: date }))
            } catch (e) { }
        }
    }

    return (
        <div className="recipe__filter-wrap">
            <BlockTitle title={"Filter"} />
            <div className="recipe__filter">
                <div className="filter__item">
                    <Search value={filters.keyword} onChange={onFilterChange} placeholder={"RECIPE TITLE OR USER"} />
                    <div className="filter__tags">
                        <div>
                            dsfsdf
                        </div>
                    </div>
                </div>
                <div className="filter__item">
                    <div className="filter__diff">
                        <p>Difficulty</p>
                        <select name="difficulty" value={filters.difficulty} onChange={onFilterChange}>
                            <option value="ANY">Any</option>
                            <option value="EASY">Easy</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="HARD">Hard</option>
                        </select>
                    </div>
                    <div className="filter__time">
                        <p>Cooking time (min)</p>
                        <div>
                            <input name="cookingTimeFrom" type="number" onChange={onFilterChange} placeholder="from" />
                            -
                            <input name="cookingTimeTo" type="number" onChange={onFilterChange} placeholder="to" />
                        </div>
                    </div>
                    <div className="filter__time">
                        <p>Date</p>
                        <div>
                            <input name="publishedFrom" type={"date"} onChange={onFilterChange} defaultValue={new Date(0).toISOString().split('T')[0]} />
                            -
                            <input name="publishedTo" type={"date"} onChange={onFilterChange} defaultValue={new Date().toISOString().split('T')[0]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesFilter;