import React from 'react';
import styles from "./AccountInfo.module.scss"

import {useAppDispatch, useAppSelector} from "@app/hooks/store";
import {Button} from "@components/ui/button";
import {logout} from "@app/http/user-api-calls";
import {authActions} from "@app/store/slices/auth-slice";
import Icons from "@components/ui/icons";
import {Divider} from "@components/ui/divider";
import dayjs from "dayjs";

const getGreetingMessage = () => {
    const hours = dayjs().get("hours")
    if (hours >= 22 || hours < 4) return "Good night"
    if (hours >= 18) return "Good evening"
    if (hours >= 12) return "Good afternoon"
    if (hours >= 4) return "Good afternoon"
}

export const AccountInfo = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.auth).user

    const onLogout = () => {
        logout()
        dispatch(authActions.logout())
        localStorage.removeItem('user-token')
    }

    return (
        <div className={styles.accountInfo}>
            <p className={"textHeader3"}>
                { `${getGreetingMessage()}, ${user?.username}`}
            </p>
            { user?.isActivated
                ? null
                : <span className={"textBody " + styles.accountInfoNotActivated}>
                    Account is not activated
                    <Button className={styles.activateButton}>Activate</Button>
                </span>
            }
            <Divider />
            <div className={styles.accountInfoItem}>
                <Icons name={"user"} size={22} />
                <Button as={"link"} to={"/admin"} className={styles.accountInfoLink}>
                    User Profile
                </Button>
            </div>
            <div className={[styles.accountInfoItem, user?.isActivated ? "" : styles.accountInfoItem_disabled].join(" ")}>
                <Icons name={"plus"} size={22} />
                <Button as={"link"} to={"/recipe/create"}  className={styles.accountInfoLink}>
                    Add Recipe
                </Button>
            </div>
            <div className={styles.accountInfoItem}>
                <Icons name={"favourite"} size={22} />
                <Button as={"link"} to={"/recipe/create"} className={styles.accountInfoLink}>
                    Saved Items
                </Button>
            </div>
            <Divider />
            <div className={styles.accountInfoItem}>
                <Icons name={"cog"} size={22} />
                <Button as={"link"} to={"/recipe/create"} className={styles.accountInfoLink}>
                    Settings
                </Button>
            </div>
            <div className={styles.accountInfoItem}>
                <Icons name={"logout"} size={22} />
                <Button type={'button'} onClick={onLogout} className={styles.accountInfoLink}>
                    Logout
                </Button>
            </div>
        </div>
    );
};
