import React from "react";
import styles from "./Navbar.module.scss"
import {NavbarSearch} from "@components/navbar/navbar-search/NavbarSearch";
import {NavbarList} from "@components/navbar/navbar-list";

export const Navbar = () => {
    return (
        <nav className={styles.navbar} >
            <NavbarList />
            <NavbarSearch />
        </nav>
    )
}