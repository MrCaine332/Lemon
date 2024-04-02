import React from "react"
import styles from "./NavbarDropdown.module.scss"
import { Button } from "@components/ui/button"
import { INavbarItem } from "@components/common/navbar/navbar-list/NavbarList"

interface INavbarDropdown {
  items: INavbarItem[]
}

export const NavbarDropdown = ({ items }: INavbarDropdown) => {
  return (
    <div className={styles.navbarDropdownWrap}>
      <div className={styles.navbarDropdownContent}>
        {items.map((item) => (
          <div key={item.linkTitle} className={styles.navbarDropdownItem}>
            <Button as={"link"} to={item.linkAddress}>
              {item.linkTitle}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
