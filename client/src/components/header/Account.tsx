import React from "react"
import userIcon from "@assets/images/user.png"

import { Button } from "@components/ui/button"
import { Dropdown } from "@components/ui/dropdown"

/** Styles import go under Dropdown import, otherwise they are not applied */
import styles from "./Account.module.scss"

import { useAppSelector } from "@app/store/store"
import { AccountInfo } from "@components/header/account-info"
import { AccountAuth } from "@components/header/account-auth"

export const Account = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  return (
    <Dropdown
      wrapperClassName={styles.accountDropdownWrapper}
      dropdownClassName={styles.accountDropdown}
    >
      <Button className={styles.accountDropdownToggler} styleType={"outlined"}>
        <img src={userIcon} alt="User Avatar" />
      </Button>
      {isAuthenticated ? <AccountInfo /> : <AccountAuth />}
    </Dropdown>
  )
}
