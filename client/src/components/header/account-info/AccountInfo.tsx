import React from "react"
import styles from "./AccountInfo.module.scss"

import { Button } from "@components/ui/button"
import { logout } from "@app/http/user-api"
import { authActions } from "@app/store/slices/auth-slice"
import Icons from "@components/ui/icons"
import { Divider } from "@components/ui/divider"
import dayjs from "dayjs"
import { useAppDispatch, useAppSelector } from "@app/store/store"

const getGreetingMessage = () => {
  const hours = dayjs().get("hours")
  if (hours >= 22 || hours < 4) return "Good night"
  if (hours >= 18) return "Good evening"
  if (hours >= 12) return "Good afternoon"
  if (hours >= 4) return "Good morning"
}

export const AccountInfo = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth).user

  const onLogout = () => {
    logout()
    dispatch(authActions.logout())
  }

  return (
    <div className={styles.accountInfo}>
      <p className={"textHeader3"}>
        {`${getGreetingMessage()}, ${user?.username}`}
      </p>
      <Divider />

      <div className={styles.accountInfoItem}>
        <Icons name={"user"} size={22} />
        <Button
          as={"link"}
          to={"/profile/recipes"}
          className={styles.accountInfoLink}
        >
          My Recipes
        </Button>
      </div>

      <div className={styles.accountInfoItem}>
        <Icons name={"plus"} size={22} />
        <Button
          as={"link"}
          to={"/recipe/create"}
          className={styles.accountInfoLink}
        >
          Add Recipe
        </Button>
      </div>

      <div className={styles.accountInfoItem}>
        <Icons name={"favourite"} size={22} />
        <Button
          as={"link"}
          to={"/recipe/create"}
          className={styles.accountInfoLink}
        >
          Saved Recipes
        </Button>
      </div>

      <Divider />

      <div className={styles.accountInfoItem}>
        <Icons name={"logout"} size={22} />
        <Button
          type={"button"}
          onClick={onLogout}
          className={styles.accountInfoLink}
        >
          Logout
        </Button>
      </div>
    </div>
  )
}
