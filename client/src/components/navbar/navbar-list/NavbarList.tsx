import React, {MouseEvent} from "react";
import styles from "./NavbarList.module.scss"
import {Button} from "@components/ui/button";
import {NavbarDropdown} from "@components/navbar/navbar-dropdown";

export interface INavbarItem {
    linkTitle: string
    linkAddress: string
    submenuItems?: INavbarItem[]
}

const navbarItems: INavbarItem[] = [
    { linkTitle: "HOME", linkAddress: "/home" },
    { linkTitle: "RECIPES", linkAddress: "/recipes", submenuItems: [
            { linkTitle: "RECOMMENDED", linkAddress: "/recipes/recommended" },
            { linkTitle: "POPULAR", linkAddress: "/recipes/popular" },
            { linkTitle: "QUICK & EASY", linkAddress: "/recipes/quick&easy" },
            { linkTitle: "HEALTHY", linkAddress: "/recipes/healthy" },
            { linkTitle: "NEWEST", linkAddress: "/recipes/newest" },
        ]},
    { linkTitle: "PHOTOS", linkAddress: "/photos" },
    { linkTitle: "VIDEOS", linkAddress: "/videos" },
]

type NavbarListProps = {
    listClassName?: string
    noDropdowns?: boolean
    onLinkClick?: (event: MouseEvent) => void
}

export const NavbarList = ({ listClassName, noDropdowns = false, onLinkClick }: NavbarListProps) => {
    return (
        <ul className={[styles.navbarList, listClassName].join(' ')}>
            { navbarItems.map((item) => {
                return (
                    <li key={item.linkTitle} className={styles.navbarItem}>
                        <Button as={"link"} to={item.linkAddress} onClick={onLinkClick} >
                            {item.linkTitle}
                        </Button>
                        { !noDropdowns
                            ? <div className={styles.navbarItemDropdownWrap}>
                                { item.submenuItems ? <NavbarDropdown items={item.submenuItems} /> : null }
                            </div> : null
                        }
                    </li>
                )
            })}
        </ul>
    )
}












