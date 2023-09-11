import React from 'react';
import styles from "@pages/recipes/Page.modules.scss";
import {useQuery} from "@tanstack/react-query";
import {useAppDispatch, useAppSelector} from "@app/hooks/store";
import {RecipesParams} from "@app/types/params";
import {recipesActions} from "@app/store/slices/recipes-slice";
import {RecipesFilter} from "@modules/modules-recipes/recipes-filter";
import {RecipesList} from "@components/recipes-list";
import {getRecipes} from "@app/http/recipe-api-calls";
import {useQueryObjectState} from "@app/hooks/useQueryObjectState";
import {useDebounce} from "use-debounce";

export const Recipes = () => {
    const [params, setParams] = useQueryObjectState<RecipesParams>({
        defaultParams: {
            search: '',
            topicId: null,
            difficulty: null,
            _limit: 6,
            _page: 1
        },
        paramConverter: (value, key) => {
            if (!isNaN(Number(value)))
                return Number(value)
            return value
        }
    })

    const debouncedParams = useDebounce(params, 1000)

    const recipes = useAppSelector(state => state.recipes.recipes)
    const dispatch = useAppDispatch()

    useQuery({
        queryKey: ["recipes", debouncedParams],
        retryDelay: 1000,
        retry: 0,
        queryFn: () => getRecipes(params),
        onSuccess: (response) => {
            dispatch(recipesActions.setRecipes(response.data))
        },
    })

    return (
        <div className={'page ' + styles.recipesPage}>
            <RecipesFilter params={params} setParams={setParams} />
            <RecipesList recipes={recipes} />
        </div>
    );
};