import React, {useEffect} from "react";
import "./NavbarList.scss"
import NavbarDropdown from "../navbar-dropdown/NavbarDropdown";
import {INavbarItem, INavbarList} from "../../../types";
import AppButton from "../../general/app-button/AppButton";

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
    { linkTitle: "VIDEOS", linkAddress: "/videos" }
]

const NavbarList: React.FC<INavbarList> = ({ dropdowns, linkOnClick  }) => {

    return (
        <div className="navbar__links">
            { navbarItems.map((item) => {
                return (
                    <div key={item.linkTitle} className="navbar__link">
                        <AppButton type="link" to={item.linkAddress} name={item.linkTitle} onClick={linkOnClick} className="secondary" />
                        { dropdowns && item.submenuItems &&
                            <NavbarDropdown items={item.submenuItems} />
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default NavbarList













