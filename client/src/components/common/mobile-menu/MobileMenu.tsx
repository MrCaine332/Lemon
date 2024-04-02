import React, { useState } from "react"
import styles from "./MobileMenu.module.scss"
import { Dropdown } from "@components/ui/dropdown"
import { Button } from "@components/ui/button"
import { Hamburger } from "@components/ui/hamburger"
import { Divider } from "@components/ui/divider"
import { NavbarSearch } from "@components/common/navbar"
import { NavbarList } from "@components/common/navbar"

export const MobileMenu = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Dropdown
      wrapperClassName={styles.mobileMenuDropdownWrapper}
      dropdownClassName={styles.mobileMenuDropdown}
      onToggleCallback={(isOpened) => setIsOpened(isOpened)}
      forceIsOpened={isOpened}
    >
      <Button
        className={styles.mobileMenuDropdownToggler}
        styleType={"outlined"}
      >
        <Hamburger isActive={isOpened} />
      </Button>
      <div className={styles.mobileMenuDropdownContent}>
        <NavbarSearch />
        <Divider />
        <NavbarList
          listClassName={styles.mobileMenuList}
          onLinkClick={() => setIsOpened((prev) => !prev)}
        />
      </div>
    </Dropdown>
  )
}
