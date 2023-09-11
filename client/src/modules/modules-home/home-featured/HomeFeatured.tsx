import React, {useState} from 'react';
import {BlockTitle} from "@components/ui/block-title";
import {useAppDispatch, useAppSelector} from "@app/hooks/store";
import {Button} from "@components/ui/button";
import {Section} from "@components/ui/section";
import styles from "./HomeFeatured.module.scss"
import {DifficultyButtons} from "@modules/modules-home/home-featured/components/difficulty-buttons";
import {HomeFeaturedItem} from "@modules/modules-home/home-featured/components/home-featured-item";
import {useQuery} from "@tanstack/react-query";
import {homeActions} from "@app/store/slices/home-slice";
import {Difficulty} from "@app/enums";
import {getFeaturedRecipes} from "@app/http/recipe-api-calls";

export const HomeFeatured = () => {
    const dispatch = useAppDispatch()
    const featuredRecipes = useAppSelector(state => state.home.featuredRecipes)
    const [difficulty, setDifficulty] = useState(Difficulty.easy)

    useQuery({
        queryKey: ["featured"],
        retry: 0,
        queryFn: () => getFeaturedRecipes(),
        onSuccess: (response) => {
            dispatch(homeActions.setFeaturedRecipes(response.data))
        }
    })


    return (
        <Section className={styles.homeFeaturedWrapper}>
            <BlockTitle title={"Recipes"} />
            <div className={styles.homeFeatured}>
                <DifficultyButtons difficulty={difficulty} setDifficulty={setDifficulty} />
                <div className={styles.homeFeaturedList}>
                    { featuredRecipes[Difficulty[difficulty] as keyof typeof featuredRecipes]
                        .map(recipe => (
                            <HomeFeaturedItem key={recipe.id}
                                              recipe={recipe} />
                        ))}
                </div>
                <div className={styles.homeFeaturedMoreBtn}>
                    <Button styleType={"outlined"}>
                        VIEW MORE
                    </Button>
                </div>
            </div>
        </Section>
    );
};