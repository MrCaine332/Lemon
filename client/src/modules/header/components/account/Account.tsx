import React from "react";
import userIcon from "@assets/images/user.png"
import {Button} from "@components/ui/button";
import {useAppSelector} from "@app/hooks/store";
import {AccountAuth} from "@modules/header/components/account/account-auth";
import {AccountInfo} from "@modules/header/components/account/account-info";
import {Dropdown} from "@components/ui/dropdown";
import styles from "./Account.module.scss"

export const Account = () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)

    return (
        <Dropdown wrapperClassName={styles.accountDropdownWrapper}
                  dropdownClassName={styles.accountDropdown}>
            <Button className={styles.accountDropdownToggler}
                    styleType={"outlined"}>
                <img src={userIcon} alt="" />
            </Button>
            <>
                { isAuthenticated
                    ? <AccountInfo />
                    : <AccountAuth />
                }
            </>
        </Dropdown>
    )
}