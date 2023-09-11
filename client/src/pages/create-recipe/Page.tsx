import styles from './Page.module.scss'
import {CreateRecipeDetails} from "@modules/modules-create-recipe/create-recipe-details";
import {BlockTitle} from "@components/ui/block-title";
import {Section} from "@components/ui/section";
import React, {useState} from "react";
import {CreateRecipeData} from "@app/types/request/bodies";
import {Button} from "@components/ui/button";
import {CreateRecipeIngredients} from "@modules/modules-create-recipe/create-recipe-ingredients";
import {CreateRecipeSteps} from "@modules/modules-create-recipe/create-recipe-steps";
import {createRecipe} from "@app/http/recipe-api-calls";
import {CreateRecipeApiError} from "@app/types/errors";
import {useAppSelector} from "@app/hooks/store";
import {useNavigate} from "react-router-dom";
import {mapErrors} from "@app/helpers/map-errors";
import {useLocalStorageState} from "@app/hooks/useLocalStorageState";

export type CreateRecipeFormProps = {
    recipeData: CreateRecipeData
    setRecipeData: React.Dispatch<React.SetStateAction<CreateRecipeData>>
    errors: CreateRecipeApiError
    setErrors:  React.Dispatch<React.SetStateAction<CreateRecipeApiError>>
}

const CreateRecipe = () => {
    const navigate = useNavigate()
    const user = useAppSelector(state => state.auth.user)

    const [previewImage, setPreviewImage] = useState<File | null>(null)

    const [recipeData, setRecipeData, disposeRecipeData] = useLocalStorageState<CreateRecipeData>("recipe-data", {
        title: "",
        description: "",
        topicId: null,
        cookingTime: null,
        difficulty: null,
        ingredients: [],
        steps: [],
    })

    const [errors, setErrors] = useState<CreateRecipeApiError>({})

    const onCreate = async () => {
        try {
            if (!previewImage) {
                setErrors(prev => ({...prev, previewImage: "Please, upload preview image."}))
                window.scrollTo({ top: 0, behavior: "smooth" })
                return
            }
            await createRecipe(recipeData, previewImage)
            navigate(user ? `/user/${user.id}` : "/home")
            disposeRecipeData()
        } catch (err) {
            const defaultErrorMessage = "We are sorry, something went wrong on our side. Please, try again later."
            const mappedErrors = mapErrors<CreateRecipeApiError>(err, defaultErrorMessage)
            setErrors(mappedErrors)
            if (!mappedErrors.default)
                window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    return (
        <div className={'page ' + styles.createRecipePage}>
            <Section>
                <BlockTitle className={styles.createRecipeTitle} title={"Add Recipe"} />
            </Section>
            <CreateRecipeDetails recipeData={recipeData}
                                 setRecipeData={setRecipeData}
                                 previewImage={previewImage}
                                 setPreviewImage={setPreviewImage}
                                 errors={errors}
                                 setErrors={setErrors} />
            <div className={styles.createRecipePage_twoCol}>
                <CreateRecipeIngredients recipeData={recipeData}
                                         setRecipeData={setRecipeData}
                                         errors={errors}
                                         setErrors={setErrors} />
                <CreateRecipeSteps recipeData={recipeData}
                                   setRecipeData={setRecipeData}
                                   errors={errors}
                                   setErrors={setErrors} />
            </div>
            <Section className={styles.createRecipeFinalize}>
                <p className={"textBody " + styles.createRecipeFinalizeCaption}>
                    In Lemon we respect all cooks around the world.
                    Please, do not publish recipes that you found in other resources.<br/>
                    Published recipes are subject to our&nbsp;
                    <Button className={styles.termsOfUseButton}>
                        Terms Of Service
                    </Button>
                    .
                </p>
                { errors.default
                    ? <p className={"textBody " + styles.createRecipeDefaultError}>
                        { errors.default }
                    </p>
                    : null }
                <Button styleType={"filled"} onClick={onCreate} className={styles.publishRecipeButton}>
                    PUBLISH RECIPE
                </Button>
            </Section>
        </div>
    )
};

export default CreateRecipe;