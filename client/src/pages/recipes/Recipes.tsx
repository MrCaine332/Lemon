import React from "react"
import styles from "./Recipes.modules.scss"
import { RecipesParams } from "@app/types/params"
import { RecipesFilter } from "@modules/recipes/filter"
import { RecipesList } from "@modules/common/recipes-list"
import { useQueryObjectState } from "@app/hooks/useQueryObjectState"
import { useDebounceValue } from "usehooks-ts"
import { useGetRecipesQuery } from "@app/http/recipe-api"
import { Section } from "@components/ui/section"
import { Pagination } from "@components/ui/pagination"
import { Helmet } from "react-helmet"

export const Recipes = () => {
  const [params, setParams] = useQueryObjectState<RecipesParams>({
    defaultParams: {
      search: "",
      topicId: null,
      difficulty: null,
      _limit: 12,
      _page: 1,
    },
    paramConverter: (value, key) => {
      if (!isNaN(Number(value))) return Number(value)
      return value
    },
  })

  const [debouncedParams] = useDebounceValue(params, 300)

  const { data: recipesData } = useGetRecipesQuery(debouncedParams)

  return (
    <>
      <Helmet>
        <meta name="description" content="Find you farvorite recipe" />
        <title>Recipes</title>
      </Helmet>
      <div className={"page " + styles.recipesPage}>
        <RecipesFilter params={params} setParams={setParams} />
        <RecipesList recipes={recipesData?.recipes} />
        <Section>
          <Pagination
            onPageChange={({ selected }) =>
              setParams((prev) => ({ ...prev, _page: selected + 1 }))
            }
            pageCount={Math.ceil((recipesData?.total || 0) / params._limit)}
          />
        </Section>
      </div>
    </>
  )
}
