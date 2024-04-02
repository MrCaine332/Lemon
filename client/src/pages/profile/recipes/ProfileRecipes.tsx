import React, { useState } from "react"
import styles from "./ProfileRecipes.module.scss"
import { RecipesList } from "@modules/common/recipes-list"
import { useGetRecipesQuery } from "@app/http/recipe-api"
import { useAppSelector } from "@app/store/store"
import { Section } from "@components/ui/section"
import { Pagination } from "@components/ui/pagination"

export const ProfileRecipes = () => {
  const { user } = useAppSelector((state) => state.auth)
  const [page, setPage] = useState(1)

  const { data: recipesData } = useGetRecipesQuery({
    userId: user!.id,
    _page: page,
    _limit: 12,
  })

  return (
    <div className={"page " + styles.profileRecipesPage}>
      <RecipesList
        recipes={recipesData?.recipes}
        customBlockTitle={`${user!.username}'s recipes`}
      />
      <Section>
        <Pagination
          onPageChange={({ selected }) =>
            setPage(selected + 1)
          }
          pageCount={Math.ceil((recipesData?.total || 0) / 12)}
        />
      </Section>
    </div>
  )
}
