import React from 'react';
import {useAppDispatch, useAppSelector} from "@app/hooks/store";
import {BlockTitle} from "@components/ui/block-title";
import {Section} from "@components/ui/section";
import styles from "./HomeRecommendations.module.scss"
import {useQuery} from "@tanstack/react-query";
import {homeActions} from "@app/store/slices/home-slice";
import {RecipeItem} from "@components/recipe-item";
import {getNewest} from "@app/http/recipe-api-calls";

export const HomeRecommendations = () => {
    const dispatch = useAppDispatch()
    const newestRecipes = useAppSelector(state => state.home.newestRecipes)

    useQuery({
        queryKey: ["newest"],
        retry: 0,
        queryFn: () => getNewest(),
        onSuccess: (response) => {
            dispatch(homeActions.setNewest(response.data))
        }
    })

    return (
        <Section>
            <BlockTitle title={"Newest"} />
            <div className={styles.homeRecommendationItems}>
            {
                newestRecipes.map(recipe => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                ))
            }
            </div>
        </Section>
    );
};