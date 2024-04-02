import React, { useMemo } from "react"
import styles from "./RecipesFilter.module.scss"
import { Section } from "@components/ui/section"
import { Label } from "@components/ui/label"
import { Input } from "@components/ui/input"
import { Select } from "@components/ui/select"
import { Option } from "@components/ui/select/Select"
import { Difficulty } from "@app/enums"
import { RecipesParams } from "@app/types/params"
import { useGetTopicsQuery } from "@app/http/topic-api"

const difficultyOptions = [
  { value: Difficulty.easy, name: Difficulty[Difficulty.easy].toUpperCase() },
  {
    value: Difficulty.medium,
    name: Difficulty[Difficulty.medium].toUpperCase(),
  },
  { value: Difficulty.hard, name: Difficulty[Difficulty.hard].toUpperCase() },
]

type RecipesFilterProps = {
  params: RecipesParams
  setParams: React.Dispatch<React.SetStateAction<RecipesParams>>
}

export const RecipesFilter = ({ params, setParams }: RecipesFilterProps) => {
  const { data: topics } = useGetTopicsQuery()

  const selectTopicsOptions = useMemo(() => {
    const options = [{ value: 0, name: "All" }]
    if (topics)
      topics.forEach((topic) =>
        options.push({ value: topic.id, name: topic.topicName })
      )

    return options
  }, [topics])

  const onDifficultyChange = (option: Option | null) => {
    const difficulty = (option?.name as "EASY" | "MEDIUM" | "HARD") || null
    setParams((prev) => ({ ...prev, difficulty: difficulty }))
  }

  return (
    <Section>
      <div className={styles.recipesFilters}>
        <Label label={"Search"} wrapperClassName={styles.recipesFilterItem}>
          <Input
            placeholder="Search for recipe"
            value={params.search}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, search: e.target.value }))
            }
            inputBoxClassName={styles.recipesFiltersSearchInputBox}
          />
        </Label>
        <Label label={"Topic"} wrapperClassName={styles.recipesFilterItem}>
          <Select
            options={selectTopicsOptions}
            onChange={(option) =>
              setParams((prev) => ({
                ...prev,
                topicId: option ? (option.value as number) : null,
              }))
            }
            selectedOption={
              selectTopicsOptions.find(
                (topic) => topic.value === params.topicId
              ) || null
            }
            placeholder={"Select topic"}
            buttonClassName={styles.recipesFiltersSelectButton}
          />
        </Label>
        <Label label={"Difficulty"} wrapperClassName={styles.recipesFilterItem}>
          <Select
            options={difficultyOptions}
            onChange={onDifficultyChange}
            selectedOption={
              difficultyOptions.find((o) => o.name === params.difficulty) ||
              null
            }
            placeholder={"Select difficulty"}
            buttonClassName={styles.recipesFiltersSelectButton}
          />
        </Label>
      </div>
    </Section>
  )
}
