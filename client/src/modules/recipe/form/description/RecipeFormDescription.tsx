import React, { ChangeEvent, MouseEvent, useMemo, useRef } from "react"
import styles from "./RecipeFormDescription.module.scss"
import Icons from "@components/ui/icons"
import { Button } from "@components/ui/button"
import { Section } from "@components/ui/section"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Select } from "@components/ui/select"
import { Option } from "@components/ui/select/Select"
import UploadImagePlaceholder from "@assets/images/upload_image.jpg"
import { CreateRecipeBody } from "@app/types/request/bodies"
import { CreateRecipeApiError } from "@app/types/errors"
import { Difficulty } from "@app/enums"
import { useGetTopicsQuery } from "@app/http/topic-api"

const difficultyOptions = [
  { value: Difficulty.easy, name: Difficulty[Difficulty.easy].toUpperCase() },
  {
    value: Difficulty.medium,
    name: Difficulty[Difficulty.medium].toUpperCase(),
  },
  { value: Difficulty.hard, name: Difficulty[Difficulty.hard].toUpperCase() },
]

type RecipeFormDescriptionProps = {
  recipeData: CreateRecipeBody
  setRecipeData: React.Dispatch<React.SetStateAction<CreateRecipeBody>>
  previewImage: { file: File | null; url: string | null }
  changePreviewImage: (image: File | null) => void
  errors: CreateRecipeApiError
  setErrors: React.Dispatch<React.SetStateAction<CreateRecipeApiError>>
}

export const RecipeFormDescription = ({
  recipeData,
  setRecipeData,
  previewImage,
  changePreviewImage,
  errors,
  setErrors,
}: RecipeFormDescriptionProps) => {
  const previewImageInputRef = useRef<HTMLInputElement>(null)

  const { data: topics } = useGetTopicsQuery()

  const dropError = (field: keyof CreateRecipeApiError) => {
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: "" }))
    }
  }

  const selectTopicsOptions = useMemo(() => {
    const options: Option[] = []
    if (topics)
      topics.forEach((topic) =>
        options.push({ value: topic.id, name: topic.topicName })
      )
    return options
  }, [topics])

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length < 1) return
    changePreviewImage(files[0])
    dropError("previewImage")
  }

  const onImageReset = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    changePreviewImage(null)
    if (previewImageInputRef.current) previewImageInputRef.current.value = ""
  }

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof CreateRecipeBody
  ) => {
    setRecipeData((prev: any) => ({ ...prev, [field]: e.target.value }))
    dropError(field)
  }

  const onSelectChange = (
    option: Option | null,
    field: keyof CreateRecipeBody
  ) => {
    if (field === "difficulty") {
      const selectedDifficulty = option?.name as
        | "EASY"
        | "MEDIUM"
        | "HARD"
        | null
      setRecipeData((prev) => ({ ...prev, difficulty: selectedDifficulty }))
    }
    if (field === "topicId")
      setRecipeData((prev) => ({
        ...prev,
        topicId: (option?.value as number) || null,
      }))

    dropError(field)
  }

  return (
    <Section noPadding className={styles.recipeFormDescription}>
      <label
        htmlFor={"recipeFormPreviewImage"}
        className={styles.imagePlaceholder}
      >
        <input
          type="file"
          accept={"image/*"}
          hidden
          ref={previewImageInputRef}
          id={"recipeFormPreviewImage"}
          onChange={onImageChange}
        />
        <img src={previewImage.url || UploadImagePlaceholder} />
        <div className={styles.imagePlaceholderVeil} />
        {previewImage.file ? (
          <Button
            styleType={"none"}
            className={styles.imagePlaceholderRemove}
            onClick={onImageReset}
          >
            <Icons name={"close"} size={24} />
          </Button>
        ) : null}
        {errors.previewImage ? (
          <p className={"textBody " + styles.imagePlaceholderError}>
            {errors.previewImage}
          </p>
        ) : null}
      </label>

      <div className={styles.details}>
        <Input
          value={recipeData.title}
          onChange={(e) => onInputChange(e, "title")}
          inputBoxClassName={styles.recipeTitleInputBox}
          className={styles.recipeTitleInput}
          placeholder={"Recipe title"}
          error={errors.title}
        />

        <Label
          label={"Description"}
          wrapperClassName={styles.recipeDescriptionInputLabel}
        >
          <Input
            className={styles.recipeDescriptionInput}
            as={"textarea"}
            onChange={(e) => onInputChange(e, "description")}
            value={recipeData.description}
            wrapperClassName={styles.recipeDescriptionInputWrapper}
            inputBoxClassName={styles.recipeDescriptionInputBox}
            placeholder={"Please, provide short description of your meal"}
            error={errors.description}
          />
        </Label>

        <div className={styles.recipeInputsGroup}>
          <Label
            label={"Cooking time (min)"}
            wrapperClassName={styles.recipeInputsGroupItem}
          >
            <Input
              placeholder={"Cooking time"}
              type={"number"}
              value={recipeData.cookingTime || ""}
              onChange={(e) => onInputChange(e, "cookingTime")}
              error={errors.cookingTime}
            />
          </Label>

          <Label
            label={"Difficulty"}
            wrapperClassName={styles.recipeInputsGroupItem}
          >
            <Select
              options={difficultyOptions}
              onChange={(o) => onSelectChange(o, "difficulty")}
              withClearButton={false}
              placeholder={"Select difficulty"}
              selectedOption={
                difficultyOptions.find(
                  (o) => o.name === recipeData.difficulty
                ) || null
              }
              error={errors.difficulty}
              buttonClassName={styles.recipeDescriptionSelectButton}
            />
          </Label>

          <Label
            label={"Topic"}
            wrapperClassName={styles.recipeInputsGroupItem}
          >
            <Select
              options={selectTopicsOptions}
              onChange={(o) => onSelectChange(o, "topicId")}
              withClearButton={false}
              placeholder={"Select topic"}
              selectedOption={
                selectTopicsOptions.find(
                  (topic) => topic.value === recipeData.topicId
                ) || null
              }
              error={errors.topicId}
              buttonClassName={styles.recipeDescriptionSelectButton}
            />
          </Label>
        </div>
      </div>
    </Section>
  )
}
