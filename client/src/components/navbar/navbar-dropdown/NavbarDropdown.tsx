import React from "react";
import styles from "./NavbarDropdown.module.scss"
import {INavbarItem} from "@components/navbar/navbar-list/NavbarList";
import {Button} from "@components/ui/button";

interface INavbarDropdown {
    items: INavbarItem[]
}

export const NavbarDropdown = ({items}: INavbarDropdown) => {
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