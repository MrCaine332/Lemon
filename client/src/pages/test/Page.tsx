import React from 'react';
import styles from "./Page.module.scss"
import {Button} from "@components/ui/button";
import $api, {API_URL} from "@app/http";
import {useAppSelector} from "@app/hooks/store";

export const Test = () => {
    const user = useAppSelector(state => state.auth.user)

    const test = async () => {
        const response = await $api.get(`${API_URL}/recipes/10`)
        console.log(response)
    }

    return (
        <div className={'page ' + styles.homePage}>
            <Button styleType={"outlined"} onClick={test}>
                TEST
            </Button>
        </div>
    );
};