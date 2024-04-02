import React from "react"
import styles from "./Navbar.module.scss"
import { NavbarList } from "@components/common/navbar"
import { NavbarSearch } from "@components/common/navbar"

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavbarList />
      <NavbarSearch />
    </nav>
  )
}
