import styles from './CreateRecipeDetails.module.scss';
import {Section} from "@components/ui/section";
import {Input} from "@components/ui/input";
import {Label} from "@components/ui/label";
import {Select} from "@components/ui/select";
import React, {ChangeEvent, MouseEvent, useMemo, useRef} from "react";
import {Option} from "@components/ui/select/Select";
import UploadImage from "@assets/images/upload_image.jpg";
import {Button} from "@components/ui/button";
import Icons from "@components/ui/icons";
import {CreateRecipeData} from "@app/types/request/bodies";
import {CreateRecipeApiError} from "@app/types/errors";
import {Difficulty} from "@app/enums";
import {useQuery} from "@tanstack/react-query";
import {getTopics} from "@app/http/topic-api-calls";
import {CreateRecipeFormProps} from "@pages/create-recipe/Page";


const difficultyOptions = [
	{ value: Difficulty.easy, name: Difficulty[Difficulty.easy].toUpperCase()},
	{ value: Difficulty.medium, name: Difficulty[Difficulty.medium].toUpperCase()},
	{ value: Difficulty.hard, name: Difficulty[Difficulty.hard].toUpperCase()},
]

type CreateRecipeDetailsProps = CreateRecipeFormProps & {
	previewImage: File | null,
	setPreviewImage: React.Dispatch<React.SetStateAction<File | null>>
}

export const CreateRecipeDetails = ({
	recipeData,
	setRecipeData,
	previewImage,
	setPreviewImage,
	errors,
	setErrors
}: CreateRecipeDetailsProps) => {
	const inputRef = useRef<HTMLInputElement>(null)

	/** TODO: Add loader for select */
	const { data: topics, isLoading } = useQuery({
		queryKey: ["topics"],
		queryFn: () => getTopics(),
	})

	const selectTopicsOptions = useMemo(() => {
		const options: Option[] = []
		if (topics && topics.data)
			topics.data.forEach(topic => options.push({ value: topic.id, name: topic.topicName }))

		return options
	}, [topics])

	const previewImageUrl = useMemo(() => {
		if (previewImage)
			return URL.createObjectURL(previewImage)
		return null
	}, [previewImage])

	const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files || files.length < 1)
			return;
		setPreviewImage(files[0])
		dropError("previewImage")
	}

	const onImageReset = (e: MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setPreviewImage(null)
		if (inputRef.current)
			inputRef.current.value = ""
	}

	const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof CreateRecipeData) => {
		setRecipeData(prev => ({...prev, [field]: e.target.value}))
		dropError(field)
	}

	const onSelectChange = (option: Option | null, field: keyof CreateRecipeData) => {
		if (field === "difficulty") {
			const selectedDifficulty = option?.name as "EASY" | "MEDIUM" | "HARD" | null
			setRecipeData(prev => ({...prev, difficulty: selectedDifficulty}))
		}
		if (field === "topicId")
			setRecipeData(prev => ({...prev, topicId: option?.value as number || null}))

		dropError(field)
	}

	const dropError = (field: keyof CreateRecipeApiError) => {
		if (errors[field]) {
			setErrors(prev => ({...prev, [field]: ""}))
		}
	}

	return (
		<Section noPadding className={styles.createRecipeDetails}>
			<label htmlFor={"createRecipePreview"} className={styles.imagePlaceholder}>
				<input type="file"
				       accept={"image/*"}
				       hidden
				       ref={inputRef}
				       id={"createRecipePreview"}
				       onChange={onImageChange} />
				<img src={previewImageUrl || UploadImage} />
				<div className={styles.imagePlaceholderVeil} />
				{
					previewImage
						? <Button styleType={"none"}
						          className={styles.imagePlaceholderRemove}
						          onClick={onImageReset}>
							<Icons name={"close"} size={24} />
						</Button>
						: null
				}
				{
					errors.previewImage
						? <p className={"textBody " + styles.imagePlaceholderError}>
							{errors.previewImage}
						</p>
						: null
				}
			</label>
			<div className={styles.details}>
				<Input value={recipeData.title}
				       onChange={(e) => onInputChange(e, "title")}
				       inputBoxClassName={styles.recipeTitleInputBox}
				       className={styles.recipeTitleInput}
				       placeholder={"Recipe title"}
				       error={errors.title}
				/>
				<Label label={"Description"} wrapperClassName={styles.recipeDescriptionInputLabel}>
					<Input className={styles.recipeDescriptionInput}
					       as={"textarea"}
					       onChange={(e) => onInputChange(e, "description")}
					       value={recipeData.description}
					       wrapperClassName={styles.recipeDescriptionInputWrapper}
					       inputBoxClassName={styles.recipeDescriptionInputBox}
					       placeholder={"Please, provide short description of your meal"}
					       error={errors.description} />
				</Label>
				<div className={styles.recipeInputsGroup}>
					<Label label={"Cooking time (min)"} wrapperClassName={styles.recipeInputsGroup_item}>
						<Input placeholder={"Cooking time"}
						       type={"number"}
						       value={recipeData.cookingTime || ""}
						       onChange={(e) => onInputChange(e, "cookingTime")}
						       error={errors.cookingTime} />
					</Label>
					<Label label={"Difficulty"} wrapperClassName={styles.recipeInputsGroup_item}>
						<Select options={difficultyOptions}
						        onChange={(o) => onSelectChange(o, "difficulty")}
						        withClearButton={false}
						        placeholder={"Select difficulty"}
						        selectedOption={difficultyOptions.find(o => o.name === recipeData.difficulty) || null}
								error={errors.difficulty} />
					</Label>
					<Label label={"Topic"} wrapperClassName={styles.recipeInputsGroup_item}>
						<Select options={selectTopicsOptions}
						        onChange={(o) => onSelectChange(o, "topicId")}
						        withClearButton={false}
						        placeholder={"Select topic"}
						        selectedOption={selectTopicsOptions.find(topic => topic.value === recipeData.topicId) || null}
						        error={errors.topicId} />
					</Label>
				</div>
			</div>
		</Section>
	);
};