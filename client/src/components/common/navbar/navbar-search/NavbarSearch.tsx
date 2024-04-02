import React, { useState } from "react"
import styles from "./NavbarSearch.module.scss"
import { Button } from "@components/ui/button"
import Icons from "@components/ui/icons"
import { createSearchParams, useNavigate } from "react-router-dom"
import { Input } from "@components/ui/input"

export const NavbarSearch = () => {
  const navigate = useNavigate()
  const [searchString, setSearchString] = useState("")

  const onInputEnterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchString) {
      redirectWithSearch()
    }
  }

  const redirectWithSearch = () => {
    navigate({
      pathname: "/recipes",
      search: createSearchParams({
        search: searchString,
      }).toString(),
    })
  }

  return (
    <Input
      placeholder={"FIND A RECIPE"}
      value={searchString}
      onChange={(e) => setSearchString(e.target.value)}
      onKeyDown={onInputEnterKeyDown}
      inputBoxClassName={styles.navbarSearchInput}
    >
      <Button
        styleType={"outlined"}
        className={[
          styles.navbarSearchButton,
          searchString ? styles.navbarSearchButton_filled : "",
        ].join(" ")}
        onClick={redirectWithSearch}
        disabled={!searchString}
      >
        <Icons name={"search"} size={20} />
      </Button>
    </Input>
  )
}
